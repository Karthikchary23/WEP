const express = require('express');
const Router = express.Router();
const customerSignUp = require('../Controllers/CustomerAuth');

Router.use('/customer/signup', customerSignUp);

module.exports = Router;