const { default: mongoose } = require("mongoose")
const { DescriptiveSection } = require("../../../Models/DescriptiveSection")
const _ = require('lodash')


const deleteDescriptiveSection = async (req, res) => {

    const id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let descriptiveSection = await DescriptiveSection.findById(id)
        if (descriptiveSection === null) {

            res.send({ error: true, message: 'DescriptiveSection not found. Maybe descriptiveSection id is not valid' })
        }
        else {

            let data = await descriptiveSection.deleteOne()
            res.send({ error: false, message: 'DescriptiveSection deleted', data: data })
        }

    }
    else {
        res.send({ error: true, message: 'DescriptiveSection id is not valid' })
    }



}

module.exports = deleteDescriptiveSection