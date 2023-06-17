const express = require('express');
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const userController = require('../controller/userController');

router.get('/get', checkAuth, userController.fetchAll);

router.post('/login',  userController.loginUser);

router.post('/post', userController.postUser);

router.post('/update/:id',checkAuth,  userController.updateUser);

router.delete('/delete/:id',checkAuth,  userController.deleteUser);

module.exports = router;