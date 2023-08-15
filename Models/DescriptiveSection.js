const { model, Schema } = require('mongoose')


const DescriptiveSection = model('DescriptiveSection', Schema({

    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    externalLink: {
        type: String,
    },
    posterURL: {
        type: String,
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


}, { timestamps: true }))


module.exports.DescriptiveSection = DescriptiveSection