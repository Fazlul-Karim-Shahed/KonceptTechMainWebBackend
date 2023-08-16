const { default: mongoose } = require("mongoose")
const { Registration } = require("../../../Models/RegistrationModel")
const _ = require('lodash')


const deleteRegistration = async (req, res) => {

    const id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let registration = await Registration.findById(id)
        if (registration === null) {
            res.send({ error: true, message: 'Registered user not found. Maybe registration id is not valid' })
        }
        else {
            let data = await registration.deleteOne()
            res.send({ error: false, message: 'Registered user deleted', data: data })
        }

    }
    else {
        res.send({ error: true, message: 'Registration id is not valid' })
    }



}

module.exports = deleteRegistration