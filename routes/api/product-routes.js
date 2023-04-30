const router = require('express').Router();
const {
  Product, Category, Tag, ProductTag,
} = require('../../models');

// The `/api/products` endpoint

// use product model to get all products
router.get('/', async (_req, res) => {
  try {
    const dbProductData = await Product.findAll({
      // product data we're getting from the database
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      // associated data from the category and tag models
      include: [{
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
      },
      ],
    });
    res.json(dbProductData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// use product model to get one product by it's id
router.get('/:id', async (req, res) => {
  try {
    const dbProductData = await Product.findOne({
      where: {
        id: req.params.id,
      },
      // product data we're getting from the database
      attributes: ['id', 'product_name', 'price',
        'stock', 'category_id'],
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name'],
        },
        {
          model: Tag,
          attributes: ['id', 'tag_name'],
        },
      ],
    });
    res.json(dbProductData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create new product convert to async await method
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (req.body.tagsId.length) {
      const productTagIdArr = req.body.tagsId.map((tag_id) => ({
        product_id: product.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    // update product data
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // find tags associated with this product
    const productTags = await ProductTag.findAll({
      where: { product_id: req.params.id },
    });
    // get a list of tag ids
    const productTagIds = productTags.map(({ tag_id }) => tag_id);
    // create a list of new tag_ids
    const newProductTags = req.body.tagIds
      .filter((tag_id) => !productTags.include(tag_id))
      .map((tag_id) => ({
        product_id: req.params.id,
        tag_id,
      }));
    // pick which to remove and replace
    const productTagsToRemove = productTags
      .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
      .map(({ id }) => id);

    // destroy and create to update product tags
    await Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);
    res.status(200).json({ message: 'Product updated!' });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    // use product model to find all products with matching id
    const dbProductData = await Product.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (!dbProductData) {
			return res.status(404).json({ message: 'No product to delete.'});
		}
      res.json(dbProductData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
    // send json response that the category has been deleted


module.exports = router;
