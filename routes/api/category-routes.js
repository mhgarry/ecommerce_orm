const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// gets all categories and their associated products tested in insomnia
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['product_name', 'price', 'stock', 'category_id']
        },
      ],
    });
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/categories:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
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
