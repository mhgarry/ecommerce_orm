const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const dbTagData = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price',
          'stock', 'category_id'],
      },
      ],
    });
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'tag_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price',
          'stock', 'category_id'],
      },
      ],
    });
    if (!dbTagData) {
      return res.status(404).json({ message: 'No tag found with this id.' });
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const dbTagData = await Tag.create({
      tag_name: req.body.tag_name,
    });

    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [rowsAffected, [updatedTag]] = await Tag.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (!rowsAffected) {
      return res.status(404).json({ message: 'No tag found with this id' });
    }
    res.json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
