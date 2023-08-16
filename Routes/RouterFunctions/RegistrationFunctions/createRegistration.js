const { Registration } = require("../../../Models/RegistrationModel")
const _ = require('lodash')



const createRegistration = async (req, res) => {

    let check = await Registration.findOne({ $or: [{ email: req.body.email }, { mobile: req.body.mobile }] })

    if (check === null) {

        if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('email') && req.body.hasOwnProperty('mobile')) {


            let newRegistration = new Registration(req.body)
            let registration = await newRegistration.save()

            res.send({ error: false, data: registration, message: 'Registration successful' })

        }
        else {
            res.send({ error: true, message: 'Missing required value' })
        }


    }
    else {
        res.send({ error: true, message: 'Email or phone number already registered' })

    }

}

module.exports = createRegistration