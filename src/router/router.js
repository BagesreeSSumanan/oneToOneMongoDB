const express = require('express');
const router = express.Router();
const {createUserWithProfile,UpdateUserandProfile,DeleteUserandprofile}= require('../controller/controller');

router.post("/createUserWithProfile", createUserWithProfile);
router.put("/UpdateUserandProfile/:id", UpdateUserandProfile);
router.delete("/DeleteUserandprofile/:id", DeleteUserandprofile);
module.exports = router;
