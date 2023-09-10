const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('user', UserSchema);