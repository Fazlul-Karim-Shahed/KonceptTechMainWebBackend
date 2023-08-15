const checkAdmin = require('../Middlewares/checkAdmin')
const createCourse = require('./RouterFunctions/CourseFunctions/createCourse')
const deleteCourse = require('./RouterFunctions/CourseFunctions/deleteCourse')
const getCourse = require('./RouterFunctions/CourseFunctions/getCourse')
const getOneCourse = require('./RouterFunctions/CourseFunctions/getOneCourse')
const updateCourse = require('./RouterFunctions/CourseFunctions/updateCourse')
const router = require('express').Router()


router.get('/', getCourse)
router.get('/:id', getOneCourse)
router.post('/create', checkAdmin, createCourse)
router.put('/update/:id', checkAdmin, updateCourse)
router.delete('/delete/:id', checkAdmin, deleteCourse)



module.exports = router