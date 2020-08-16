const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const _ = require('lodash');

UserController = {};

UserController.loginUser = (req, res, next) => {
console.log(req.body);
  const body = req.body;
  if (!req.body || !body.email || !body.password) {
    return res
      .status(400)
      .send({ message: "Invalid User Object", success: false });
  }

  User.findOne({ email: body.email }, function (err, user) {
    if (user === null) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    } else {
      if (user.validatePassword(body.password)) {
        return res.status(201).send({
          message: "User Logged in",
          success: true,
          result: user
        });
      } else {
        return res.status(400).send({
          message: "Wrong password",
          success: false,
        });
      }
    }
  });
};

UserController.registerUser = (req, res, next) => {
  const user = req.body;
  if (!req.body || !req.body || !user.name || !user.email || !user.password) {
    return res
      .status(400)
      .send({ message: "Invalid User Object", success: false });
  }

  const newUser = new User(user);
  delete newUser.password;
  newUser.generateHash(user.password);
  newUser.save(newUser, (err, user) => {
    if (err) {
      return res
        .status(400)
        .send({ message: "Failed to save user", success: false, error: err });
    } else {
      console.log("user Saved successsfully");
      return res
        .status(200)
        .send({ message: "User Saved Successfully", success: true });
    }
  });
};

UserController.getUserDetails = (req, res, next) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).send({ message: "Invalid UserId", success: false });
  }

  User.findById(userId, function (err, user) {
    if (user === null) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    } else {
      return res.status(200).send({
        message: "User Successfully found!",
        success: true,
        result: user
      });
    }
  });
};

module.exports = UserController;
