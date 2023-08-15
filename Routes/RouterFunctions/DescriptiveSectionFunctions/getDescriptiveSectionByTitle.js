const { DescriptiveSection } = require("../../../Models/DescriptiveSection")

const getDescriptiveSectionByTitle = async (req, res) => {

    let title = req.params.title

    let descriptiveSection = await DescriptiveSection.findOne({ title: title })

    if (descriptiveSection != null) {

        res.send({ error: false, data: descriptiveSection, message: 'descriptive section found by title' })
    }
    else {
        res.send({ error: true, message: ' descriptive section not found' })
    }

}


module.exports = getDescriptiveSectionByTitle