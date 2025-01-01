const express = require('express');
const User = require('./user'); // Adjust the path as necessary
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    // Check if user already exists
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create and save new user
    const newUser = new User({ email, password, coursesregs: [], coursescomp: [] });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
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
  
module.exports = router;