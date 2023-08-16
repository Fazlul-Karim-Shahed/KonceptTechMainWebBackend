const { Registration } = require("../../../Models/RegistrationModel")

const getRegistration = async (req, res) => {

    let registration = await Registration.find()

    if (registration.length === 0) {
        res.send({ error: true, message: 'No one has registered yet.' })
    }
    else {
        res.send({ error: false, data: registration, message: registration.length + ' registration found' })
    }

}


module.exports = getRegistration