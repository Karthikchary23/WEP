const express = require('express');
const Router = express.Router();
const customerSignUp = require('../controllers/CustomerAuth');

Router.use('/customer/signup', customerSignUp);

module.exports = Router;