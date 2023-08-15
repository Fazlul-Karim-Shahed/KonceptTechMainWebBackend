const { DescriptiveSection } = require("../../../Models/DescriptiveSection")

const getDescriptiveSection = async (req, res) => {

    let descriptiveSection = await DescriptiveSection.find().populate(['createdBy', 'updatedBy'])

    if (descriptiveSection.length === 0) {
        res.send({ error: true, message: 'No descriptiveSection found' })
    }
    else {
        res.send({ error: false, data: descriptiveSection, message: descriptiveSection.length + ' descriptiveSection found' })
    }

}


module.exports = getDescriptiveSection