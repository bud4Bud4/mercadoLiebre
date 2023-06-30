const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get("/login", userController.userLogin)

router.get("/register", userController.userRegister)




module.exports = router