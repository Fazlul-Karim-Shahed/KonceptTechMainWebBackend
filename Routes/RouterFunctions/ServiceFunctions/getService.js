const { Service } = require("../../../Models/ServiceModel")

const getService = async (req, res) => {

    let service = await Service.find().populate(['createdBy', 'updatedBy'])

    if (service.length === 0) {
        res.send({ error: true, message: 'No service found' })
    }
    else {
        res.send({ error: false, data: service, message: service.length + ' services found' })
    }

}


module.exports = getService