const { default: mongoose } = require("mongoose")
const { Service } = require("../../../Models/ServiceModel")
const _ = require('lodash')


const getOneService = async (req, res) => {


    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let service = await Service.findById(id).populate(['createdBy', 'updatedBy'])
        if (service === null) {
            res.send({ error: true, message: 'Service not found. Maybe service id is not valid' })
        }

        res.send({ error: false, message: 'Service found', data: service })

    }
    else {
        res.send({ error: true, message: 'Service id is not valid' })
    }



}

module.exports = getOneService