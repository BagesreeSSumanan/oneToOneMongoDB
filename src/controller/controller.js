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

const UpdateUserandProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio, website } = req.body;

    const user = await User.findById(id).populate('profile');
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }


    user.name = name;
    user.email = email;
    await user.save();


    const profile = await Profile.findById(user.profile._id);
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    profile.bio = bio;
    profile.website = website;
    await profile.save();

    const updatedUser = await User.findById(id).populate('profile');

    res.status(200).json({
      msg: "User and Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong", error });
  }
};


module.exports = {createUserWithProfile,UpdateUserandProfile}