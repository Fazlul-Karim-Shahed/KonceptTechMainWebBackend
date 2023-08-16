const checkAdmin = require('../Middlewares/checkAdmin')
const getOneCourse = require('./RouterFunctions/CourseFunctions/getOneCourse')
const createService = require('./RouterFunctions/ServiceFunctions/createService')
const deleteService = require('./RouterFunctions/ServiceFunctions/deleteService')
const getOneService = require('./RouterFunctions/ServiceFunctions/getOneService')
const getService = require('./RouterFunctions/ServiceFunctions/getService')
const updateService = require('./RouterFunctions/ServiceFunctions/updateService')

const router = require('express').Router()


router.get('/', getService)
router.get('/:id', getOneService)
router.post('/create', checkAdmin, createService)
router.put('/update', checkAdmin, updateService)
router.delete('/delete', checkAdmin, deleteService)



module.exports = router