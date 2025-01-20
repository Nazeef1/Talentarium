const express = require('express');
const User = require('./user');
const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Save user with plain-text password (not recommended)
    const newUser = new User({
      email,
      password, // Password stored as plain text (NOT SECURE)
      coursesregs: [],
      coursescomp: []
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add this endpoint to authenticate the user
router.post('/users/authenticate', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email' });
      }
  
      // Compare the provided password with the stored hashed password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Respond with success
      res.status(200).json({ message: 'Authentication successful', token: 'dummy-jwt-token' }); // Replace with a real JWT token if needed
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

// Delete a user
router.delete('/users/:email', async (req, res) => {
    const { email } = req.params;
    try {
      const user = await User.findOneAndDelete({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  // Get user's registered courses
router.get('/users/:email/coursesregs', async (req, res) => {
    const { email } = req.params;
    try {
      const user = await User.findOne({ email }).select('coursesregs');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ coursesregs: user.coursesregs });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
// Get user's completed courses
router.get('/users/:email/coursescomp', async (req, res) => {
    const { email } = req.params;
    try {
      const user = await User.findOne({ email }).select('coursescomp');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ coursescomp: user.coursescomp });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  // Add a course to user's registered courses
router.patch('/users/:email/coursesregs', async (req, res) => {
    const { email } = req.params;
    const { courseId } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.coursesregs.includes(courseId)) {
        return res.status(400).json({ message: 'Course already registered' });
      }
      user.coursesregs.push(courseId);
      await user.save();
      res.status(200).json({ message: 'Course added to registered courses' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  // Add a course to user's completed courses
router.patch('/users/:email/coursescomp', async (req, res) => {
    const { email } = req.params;
    const { courseId } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.coursescomp.includes(courseId)) {
        return res.status(400).json({ message: 'Course already completed' });
      }
      user.coursescomp.push(courseId);
      await user.save();
      res.status(200).json({ message: 'Course added to completed courses' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  // Move a course from registered courses to completed courses
  router.patch('/users/:email/move-course', async (req, res) => {
    const { email } = req.params;
    const { courseId } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Remove the course from `coursesregs`
      const isRegistered = user.coursesregs.includes(courseId);
      if (!isRegistered) {
        return res.status(400).json({ message: 'Course not found in registered courses' });
      }
      user.coursesregs = user.coursesregs.filter(id => id !== courseId);
  
      // Add the course to `coursescomp`
      if (!user.coursescomp.includes(courseId)) {
        user.coursescomp.push(courseId);
      }
  
      // Save user and return updated data
      await user.save();
      return res.status(200).json({
        message: 'Course moved to completed courses',
        coursesregs: user.coursesregs,
        coursescomp: user.coursescomp,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
module.exports = router;