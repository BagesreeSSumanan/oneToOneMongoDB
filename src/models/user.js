const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' } 
});
 
module.exports = mongoose.model('User', userSchema);