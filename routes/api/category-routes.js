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

router.post('/categories', (req, res) => {
  // create a new category
});

router.put('/categories:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/categories:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
