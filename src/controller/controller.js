const Profile = require('../models/profile');
const User = require('../models/user');

const createUserWithProfile = async(req,res)=>{
    try {
    const { name, email, bio, website } = req.body;
     const newProfile= new Profile({ bio, website });
    const savedProfile = await newProfile.save();
    const user = new User({
      name,
      email,
      profile: savedProfile._id
    });
    await user.save();

    savedProfile.user = user._id;
    await savedProfile.save();

    res.status(201).json({ msg: "User and Profile created successfully.", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong", error });
  }

}


module.exports = {createUserWithProfile}