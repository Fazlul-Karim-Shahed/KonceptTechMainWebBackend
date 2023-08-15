const { default: mongoose } = require("mongoose")
const { DescriptiveSection } = require("../../../Models/DescriptiveSection")
const _ = require('lodash')



const updateDescriptiveSection = async (req, res) => {


    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let descriptiveSection = await DescriptiveSection.findOne({ _id: id })
        if (descriptiveSection === null) {
            res.send({ error: true, message: 'Descriptive section not found. Maybe descriptive section id is not valid' })
        }

        else {

            let data = await descriptiveSection.updateOne(req.body)
            res.send({ error: false, message: 'Descriptive Section updated', data: data })

        }
    }
    else {
        res.send({ error: true, message: 'Descriptive Section id is not valid' })
    }

}

module.exports = updateDescriptiveSection