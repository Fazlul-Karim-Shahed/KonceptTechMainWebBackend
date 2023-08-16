
const jwt = require('jsonwebtoken')
const { Users } = require('../Models/UserModel')

const checkAuth = async (req, res, next) => {
    let token = req.headers.authorization
    token = await jwt.decode(token)
    if (token != null) {
        const user = await Users.findOne({ email: token.email })
        if (user) {
            next()
        }
        else return res.send({ message: 'User not found', error: true })
    }
    else return res.send({ message: 'Token invalid or not found', error: true })
}

module.exports = checkAuth