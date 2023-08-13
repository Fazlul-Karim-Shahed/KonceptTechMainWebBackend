const getUser = require('./RouterFunctions/UserFunctions/getUser')
const signinUser = require('./RouterFunctions/UserFunctions/signinUser')

const router = require('express').Router()


router.get('/', getUser)
router.get('/signin', signinUser)



module.exports = router
