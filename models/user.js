const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    email: String,
})

module.exports = mongoose.model('User', userSchema);