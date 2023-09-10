const express = require('express'); // Imported express and router
const router = express.Router();
const User = require('../models/User'); // Imported Schema to Create User
const { body, validationResult } = require('express-validator'); // Express Validator

// BCryptJs for Hashing Password
const bcrypt = require('bcryptjs');

// JSON WEB TOKEN to generate tokens for users
const jwt = require('jsonwebtoken');
JWT_SECRET = 'thisisasecretmessage';

// Validating and Saving User Credentials
router.post('/createuser', [
    body('username').isLength({ min: 5 }),
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }


    try {

        // Check if user with the entered username already exists
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json("A User with this username already exists!");
        }

        // Adding Salt to password for high security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // If the email doesn't exist:
        user = await User.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        // Generate token by sign function of JWT using ID and SECRET MESSAGE 
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error!");
    }

}
);

// Login END point using username and password
router.post('/login', [
    body('username', "Please Enter a Valid Username!").isLength({ min: 5 }),
    body('password', "Password Can not be blank!").exists(),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    const { username, password } = req.body;

    try {
        // Check if user exists in database
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json("Please Enter Correct User Credentials!");
        }

        // Comparing passwords using bycrpt 
        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            return res.status(400).json("Please Enter Correct User Credentials!");
        }

        // Generate token by sign function of JWT using ID and SECRET MESSAGE 
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error! Please Try Again");
    }

}
);
module.exports = router;
