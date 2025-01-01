const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes'); // Path to your routes file

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/restapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Mount routes
app.use('/api', userRoutes); // All routes will be prefixed with /api

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));