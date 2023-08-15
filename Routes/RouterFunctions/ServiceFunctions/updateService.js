const { default: mongoose } = require("mongoose")
const { Service } = require("../../../Models/ServiceModel")
const _ = require('lodash')



const updateService = async (req, res) => {


    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let service = await Service.findOne({ _id: id })
        if (service === null) {
            res.send({ error: true, message: 'Service not found. Maybe service id is not valid' })
        }

        else {
            let data = await Service.updateOne(req.body)
            res.send({ error: false, message: 'Service updated', data: data })
        }
    }
    else {
        res.send({ error: true, message: 'Service id is not valid' })
    }

}

module.exports = updateService