//pricingRoutes.js
const express = require('express');
const { calculatePrice } = require('./pricingService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    if (!zone || !organization_id || !total_distance || !item_type) {
      return res.status(400).json({ error: 'Missing required fields in request body' });
    }

    const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
    return res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
