const { model, Schema } = require('mongoose')


const Users = model('User', Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 5,
        max: 2024,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },

}, { timestamps: true }))


module.exports.Users = Users