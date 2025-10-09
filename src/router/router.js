const express = require('express');
const router = express.Router();
const {createUserWithProfile,UpdateUserandProfile,DeleteUserandprofile}= require('../controller/controller');
const { userValidationRules, validate } = require("../validation/validator");

router.post("/createUserWithProfile", userValidationRules(),validate,createUserWithProfile);
router.put("/UpdateUserandProfile/:id", UpdateUserandProfile);
router.delete("/DeleteUserandprofile/:id", DeleteUserandprofile);
module.exports = router;
