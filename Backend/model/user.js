const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userschema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    otp: {
        type: String
    },
    
    otpExpires: {
        type: Date
    },
    
    verified: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('User', userschema);