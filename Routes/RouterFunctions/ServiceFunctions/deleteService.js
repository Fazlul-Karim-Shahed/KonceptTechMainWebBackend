const { default: mongoose } = require("mongoose")
const { Service } = require("../../../Models/ServiceModel")
const _ = require('lodash')


const deleteService = async (req, res) => {

    const id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let service = await Service.findById(id)
        if (service === null) {
            res.send({ error: true, message: 'service not found. Maybe service id is not valid' })
        }
        else {
            let data = await service.deleteOne()
            res.send({ error: false, message: 'Service deleted', data: data })
        }

    }
    else {
        res.send({ error: true, message: 'Service id is not valid' })
    }



}

module.exports = deleteService