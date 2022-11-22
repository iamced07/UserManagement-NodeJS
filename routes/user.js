const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post("/create-user", userController.createUser);

router.get("/get-users", userController.getUsers);

router.patch("/update-user/:id", userController.updateUser);

router.delete("/delete-user/:id", userController.deleteUser);

router.delete("/multiple-delete-user", userController.multipleDeleteUser);

module.exports = router;