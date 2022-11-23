const { User } = require("../models");

const createUser = (req, res) => {
  const userInfo = req.body;
  const post = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    address: userInfo.address,
    postCode: userInfo.postCode,
    phoneNumber: userInfo.phoneNumber,
    emailAddress: userInfo.emailAddress,
    userName: userInfo.userName,
    password: userInfo.password,
  };

  User.create(post)
    .then((result) => {
      res.status(200).json({
        message: "User created successfully!",
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        data: error,
      });
    });
};

const getUsers = (req, res) => {
  User.findAll()
    .then((result) => {
      res.status(200).json({
        message: "List of users successfully loaded",
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        data: error,
      });
    });
};

const updateUser = (req, res) => {
  const firstName = req.params.id;
  let updatePayload = {};
  for (const key in req.body) {
    if (req.body[key]) {
      updatePayload[key] = req.body[key];
    }
  }
  User.update(updatePayload, { where: { firstName: firstName } })
    .then((result) => {
      if (result[0]!=0) {
        res.status(200).json({
          message: "User updated succesfully!",
          data: result,
        });
      } else {
        res.status(400).json({
          message: "User does not exist!",
          data: result,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        data: error,
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.destroy({ where: { firstName: id } })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "User deleted succesfully!",
          data: result,
        });
      } else {
        res.status(500).json({
          message: "User does not exist!",
          data: result,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        data: error,
      });
    });
};

const multipleDeleteUser = (req, res) => {
  const firstNames = req.body;
  User.destroy({ where: { firstName: firstNames } })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Multiple User deleted succesfully!",
          data: result,
        });
      } else {
        res.status(400).json({
          message: "One or more Users does not exist.",
          data: result,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
        data: error,
      });
    });
};

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
  multipleDeleteUser: multipleDeleteUser,
};
