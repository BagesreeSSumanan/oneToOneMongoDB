const Profile = require('../models/profile');
const User = require('../models/user');

const createProfile = async (req, res) => {
    try {
    if (!req.body) {
      return res.sendStatus(400);
    }
 
    const newProfile= new Profile(req.body);
    const savedProfile = await newProfile.save();
 
    console.log(savedProfile);
    return res.status(201).json({ msg: "profile saved successfully", data: savedProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to create new profile", error: error.message });
  }
};
const createUser = async (req, res) => {
    try {
    if (!req.body) {
      return res.sendStatus(400);
    }
 
    const newUser= new User(req.body);
    const savedUser = await newUser.save();
 
    console.log(savedUser);
    return res.status(201).json({ msg: "User saved successfully", data: savedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Unable to create new User", error: error.message });
  }
};
module.exports = {createProfile,createUser}