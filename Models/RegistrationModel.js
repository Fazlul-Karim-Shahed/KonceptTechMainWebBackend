const { model, Schema } = require('mongoose')


const Registration = model('Registration', Schema({

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

}, { timestamps: true }))


module.exports.Registration = Registration