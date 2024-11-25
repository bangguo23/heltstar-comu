const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const { username, bio, email, password, photo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, bio, email, password: hashedPassword, photo });
    await newUser.save();
    res.json({ message: 'User registered successfully!' });
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
