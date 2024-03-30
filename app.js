// app.js
const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('../pricingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/pricing', pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
