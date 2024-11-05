// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors =  require('cors');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});
