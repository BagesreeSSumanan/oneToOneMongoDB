const express = require('express');
const router = express.Router();
const {createUserWithProfile}= require('../controller/controller');

router.post("/createUserWithProfile", createUserWithProfile);
module.exports = router;
