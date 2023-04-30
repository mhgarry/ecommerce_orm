const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// gets all categories and their associated products tested in insomnia
router.get('/', async (req, res) => {
  try {
    // Use the Category model to find all categories
    const dbCategoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [
        {
          // Include the Product model to retrieve product information associated with the category
          model: Product,
          attributes: ['product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    // throw error if no categories are found
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// get a single category by its 'id' value
router.get('/:id', async (req, res) => {
  try {
    // Use the Category model to find a category with a matching id
    const dbCategoryData = await Category.findOne({
      where: {
        id: req.params.id, // Use the id value from the URL parameter to find the category
      },
      attributes: ['id', 'category_name'], // Specify which category attributes to include in the response
      include: [
        {
          // Include the Product model to retrieve product information associated with the category
          model: Product,
          attributes: ['product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    // throw error if no category is found with the given id
    if (!dbCategoryData) {
      res.status(404).json({ message: 'This category id does not exist.' });
      return;
    }
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// create a new category using a post request body
router.post('/', async (req, res) => {
  try {
    // sets the category_name to be the value of the request body
    const dbCategoryData = await Category.create({
      category_name: req.body.category_name,
    });
    // sends the category data back to the client
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// update a category by it's 'id' value and a put request body
router.put('/:id', async (req, res) => {
  try {
    const [rowsAffected, [updatedCategory]] = await Category.update(
      // sets the category_name to be the value of the request body
      req.body,
      {
        where: {
          id: req.params.id,
        },
        returning: true, // include updated category in the response
      },
    );

    if (!rowsAffected) {
      res.status(404).json({ message: 'This category id does not exist.' });
      return;
    }
    res.json(updatedCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// delete a category by it's category 'id' value
router.delete('/:id', async (req, res) => {
  try {
    // Use the category model to find a category with a matching id
    const dbCategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // if no category is deleted send 404 response
    if (!dbCategoryData) {
      res.status(404).json({ message: 'This category id does not exist.' });
      return;
    }
    // send json response that category has been deleted
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
