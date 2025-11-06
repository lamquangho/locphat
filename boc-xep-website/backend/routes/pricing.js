const express = require('express');
const router = express.Router();
const Pricing = require('../models/Pricing');

// GET all pricing plans
router.get('/', async (req, res) => {
  try {
    const pricing = await Pricing.find();
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single pricing plan
router.get('/:id', async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);
    if (!pricing) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create pricing plan
router.post('/', async (req, res) => {
  const pricing = new Pricing({
    name: req.body.name,
    price: req.body.price,
    unit: req.body.unit,
    features: req.body.features,
    featured: req.body.featured
  });

  try {
    const newPricing = await pricing.save();
    res.status(201).json(newPricing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

