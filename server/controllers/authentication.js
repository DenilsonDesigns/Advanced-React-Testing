const User = require("../models/user");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  //see if a user with the given email exists
  User.findOne({ email: email }, (err, existUser) => {});
  //if a user with email does exist, return an error

  //if a user with email does not exist, create and save user record

  //reponse to reques indicating the user was created
};
