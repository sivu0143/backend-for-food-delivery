//pricingService.js
const Pricing = require('./pricing');

async function calculatePrice(zone, organizationId, totalDistance, itemType) {
  try {
    const pricing = await Pricing.findOne({
      where: {
        zone,
        organization_id: organizationId,
        '$Item.type$': itemType,
      },
      include: {
        model: Item,
        attributes: [],
      },
    });

    if (!pricing) {
      throw new Error('Pricing not found');
    }

    const { base_distance_in_km, km_price, fix_price } = pricing;

    let totalPrice = 0;
    if (totalDistance <= base_distance_in_km) {
      totalPrice = fix_price;
    } else {
      totalPrice = fix_price + (totalDistance - base_distance_in_km) * km_price;
    }

    // Convert price to cents
    totalPrice *= 100;

    return totalPrice;
  } catch (error) {
    throw error;
  }
}

module.exports = { calculatePrice };