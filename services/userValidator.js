const { body } = require('express-validator');

exports.validateUser = [
    body('firstname', 'Please enter first name').exists().isLength({ min: 1 }),
    body('lastname', 'Please enter last name').exists().isLength({ min: 1 }),
    body('email', 'Please enter a valid email').exists().isEmail(),
    body('password', 'Password should be atleast 8 characters').exists().isLength({ min: 8 })
];
