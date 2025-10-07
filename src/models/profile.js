const mongoose = require('mongoose');
 
const profileSchema = new mongoose.Schema({
  bio: String,
  website: String,
});
 
module.exports = mongoose.model('Profile', profileSchema);
 