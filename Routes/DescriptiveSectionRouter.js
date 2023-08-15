const createDescriptiveSection = require('./RouterFunctions/DescriptiveSectionFunctions/createDescriptiveSection')
const deleteDescriptiveSection = require('./RouterFunctions/DescriptiveSectionFunctions/deleteDescriptiveSection')
const getDescriptiveSection = require('./RouterFunctions/DescriptiveSectionFunctions/getDescriptiveSection')
const getDescriptiveSectionByTitle = require('./RouterFunctions/DescriptiveSectionFunctions/getDescriptiveSectionByTitle')
const updateDescriptiveSection = require('./RouterFunctions/DescriptiveSectionFunctions/updateDescriptiveSection')
const checkAdmin = require('../Middlewares/checkAdmin')
const router = require('express').Router()


router.get('/', getDescriptiveSection)
router.get('/:title', getDescriptiveSectionByTitle)
router.post('/create', checkAdmin, createDescriptiveSection)
router.put('/update/:id', checkAdmin, updateDescriptiveSection)
router.delete('/delete/:id', checkAdmin, deleteDescriptiveSection)



module.exports = router