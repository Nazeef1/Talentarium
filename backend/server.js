const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
const userRoutes = require('./userRoutes'); // Path to your routes file

const app = express();

// More detailed CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your React app's URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization']
}));

app.use(express.json()); // Middleware to parse JSON

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/restapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Test route to verify server is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working' });
});

// Mount routes
app.use('/api', userRoutes); // All routes will be prefixed with /api

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
