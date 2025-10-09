const Profile = require('../models/profile');
const User = require('../models/user');
const logger = require('../logger/logger');

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
    logger.info(`User and Profile created successfully`);
  } catch (error) {
    console.error(error);
     logger.error(`error in create user ${error}`);
    res.status(500).json({ msg: "Something went wrong", error });
  }

}

const UpdateUserandProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio, website } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true } 
    ).populate('profile');

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (updatedUser.profile) {
      await Profile.findByIdAndUpdate(
        updatedUser.profile._id,
        { bio, website },
        { new: true }
      );
    }

    const finalUser = await User.findById(id).populate('profile');

    res.status(200).json({
      msg: "User and Profile updated successfully!",
      user: finalUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

const DeleteUserandprofile = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id).populate('profile');

    if (!deletedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (deletedUser.profile) {
      await Profile.findByIdAndDelete(deletedUser.profile._id);
    }

    res.status(200).json({
      msg: "User and Profile deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong", error });
  }
};


module.exports = {createUserWithProfile,UpdateUserandProfile,DeleteUserandprofile}