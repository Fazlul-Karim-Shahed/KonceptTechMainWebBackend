const createCourse = require('./RouterFunctions/CourseFunctions/createCourse')
const getCourse = require('./RouterFunctions/CourseFunctions/getCourse')
const router = require('express').Router()


router.get('/', getCourse)
router.post('/create', createCourse)
router.put('/update',)
router.delete('/delete',)



module.exports = router