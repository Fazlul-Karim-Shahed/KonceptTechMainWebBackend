const { DescriptiveSection } = require("../../../Models/DescriptiveSection")
const _ = require('lodash')



const createDescriptiveSection = async (req, res) => {

    let titleCheck = await DescriptiveSection.findOne({ title: req.body.title })

    if (titleCheck === null) {

        if (req.body.hasOwnProperty('title') && req.body.hasOwnProperty('description') && req.body.hasOwnProperty('createdBy')) {

            let newDescriptiveSection = new DescriptiveSection(req.body)

            let descriptiveSection = await newDescriptiveSection.save()

            res.send({ error: false, data: descriptiveSection, message: 'New descriptiveSection created successfully' })
        }
        else {
            res.send({ error: true, message: 'Missing required value' })
        }


    }
    else {
        res.send({ error: true, message: 'descriptiveSection already exists' })

    }

}

module.exports = createDescriptiveSection