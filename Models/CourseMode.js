
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
    },
    enrolledNumber: {
        type: Number,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },



}, { timestamp: true }))

module.exports.Course = Course