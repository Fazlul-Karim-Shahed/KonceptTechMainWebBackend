const createRegistration = require('./RouterFunctions/RegistrationFunctions/createRegistration')
const deleteRegistration = require('./RouterFunctions/RegistrationFunctions/deleteRegistration')
const getRegistration = require('./RouterFunctions/RegistrationFunctions/getRegistration')
const checkAdmin = require('../Middlewares/checkAdmin')

const router = require('express').Router()



router.get('/', checkAdmin, getRegistration)
router.post('/create', createRegistration)
router.delete('/delete/:id', checkAdmin, deleteRegistration)



module.exports = router