const getUser = require('./RouterFunctions/UserFunctions/getUser')
const signinUser = require('./RouterFunctions/UserFunctions/signinUser')
const signupUser = require('./RouterFunctions/UserFunctions/signupUser')
const router = require('express').Router()



router.get('/', getUser)
router.post('/signin', signinUser)
router.post('/signup', signupUser)



module.exports = router
