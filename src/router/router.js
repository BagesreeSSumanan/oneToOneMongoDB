const express = require('express');
const router = express.Router();
const {createUserWithProfile,UpdateUserandProfile}= require('../controller/controller');

router.post("/createUserWithProfile", createUserWithProfile);
router.put("/UpdateUserandProfile/:id", UpdateUserandProfile);
module.exports = router;
