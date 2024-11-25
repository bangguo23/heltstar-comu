const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    bio: String,
    email: String,
    password: String,
    photo: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
