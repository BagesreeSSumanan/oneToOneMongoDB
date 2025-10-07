const express = require('express');
const router = express.Router();
const {createProfile,createUser}= require('../controller/controller');

router.post("/Profile", createProfile);
router.post("/CreateUser", createUser);
module.exports = router;
