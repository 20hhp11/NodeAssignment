const express = require('express');
const { validationResult } = require('express-validator');
const userValidator = require('../services/userValidator');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { errors: [], user: {} });
});

router.post('/signup',
  userValidator.validateUser,
  (req, res) => {

    const user = { ...req.body };

    //Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('index', {
        errors: errors.array(),
        user: user
      });
    }

    if (user.isSubscribed)
      res.send(`Hello ${req.body.firstname} ${req.body.lastname}, Thank you for signing up. Your account is now created`);
    else
      res.send(`Hello ${req.body.firstname} ${req.body.lastname}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${req.body.email}`);
  });

module.exports = router;
