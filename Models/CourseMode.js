
const { model, Schema } = require('mongoose')

const Course = model('Course', Schema({

    courseName: {
        type: String,
        required: true
    },

    posterURL: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    courseFee: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },
    enrolledNumber: {
        type: Number,
    }



}, { timestamp: true }))

module.exports.Course = Course