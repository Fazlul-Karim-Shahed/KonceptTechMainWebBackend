
const jwt = require('jsonwebtoken')
const { Users } = require('../Models/UserModel')


const checkAdmin = async (req, res, next) => {
    let token = req.headers.authorization
    token = await jwt.decode(token)
    if (token != null) {
        const user = await Users.findOne({ email: token.email })
        if (user && user.role === 'admin') {
            next()
        }
        else return res.send({ message: 'You are not a admin', error: true })
    }
    else return res.send({ message: 'Token not found', error: true })
}

module.exports = checkAdmin