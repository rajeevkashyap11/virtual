const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const UserController = require('../controller/Users');
// const checkAuth = require('../middleware/check-auth');

router.post("/signup",[
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 })
], UserController.usersignup);



module.exports = router;
