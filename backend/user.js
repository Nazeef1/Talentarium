const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coursesregs: [{ type: Number, required: true }],
  coursescomp: [{ type: Number, required: true }]
});

// Pre-save hook to hash the password
userSchema.pre('save', async function(next) {
    try {
      // Check if the password field has been modified
      if (!this.isModified('password')) {
        return next();
      }
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Hash the password with the salt
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });
  
  // Method to compare passwords during login
  userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

module.exports = mongoose.model('User', userSchema);
