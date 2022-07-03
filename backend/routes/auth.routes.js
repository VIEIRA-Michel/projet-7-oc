const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const emailValidator = require('../middlewares/email-validator');
const passwordValidator = require('../middlewares/password-validator');


router.post('/signup', emailValidator, passwordValidator, userController.signup);
router.post('/login', userController.login);

module.exports = router;