const { Service } = require("../../../Models/ServiceModel")
const _ = require('lodash')



const createService = async (req, res) => {

    let titleCheck = await Service.findOne({ title: req.body.title })

    if (titleCheck === null) {

        if (req.body.hasOwnProperty('title') && req.body.hasOwnProperty('description') && req.body.hasOwnProperty('createdBy') && req.body.hasOwnProperty('posterURL')) {

            let newService = new Service(req.body)
            let service = await newService.save()

            res.send({ error: false, data: service, message: 'New Service created successfully' })

        }
        else {
            res.send({ error: true, message: 'Missing required value' })
        }

    }
    else {
        res.send({ error: true, message: 'Service already exists' })

    }

}

module.exports = createService