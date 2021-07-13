const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.usersignup = (req, res, next) => {

    console.log(req.body.name)
    console.log(req.body.email)
    
 const errors=validationResult(req);
 if(!errors.isEmpty())
 {
   return res.status(400).json({errors:errors.array()});
 }   
 
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      console.log(JSON.stringify(user))
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              password: hash
            });

            user
              .save()
              .then(result => {
                console.log(JSON.stringify(result));
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};