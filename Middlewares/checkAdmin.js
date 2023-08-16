
const jwt = require('jsonwebtoken')
const { Users } = require('../Models/UserModel')


const checkAdmin = async (req, res, next) => {
    let token = req.headers.authorization
    token = await jwt.decode(token)

    if (token != null) {

        let currentTime = new Date().toString()
        let expTime = new Date(token.exp * 1000).toString()

        if (currentTime > expTime) {
            return res.send({ message: 'Token has expired', error: true })
        }
        else {

            const user = await Users.findOne({ email: token.email })
            if (user && user.role === 'admin') {
                next()
            }
            else return res.send({ message: 'You are not a admin', error: true })
        }

    }
    else return res.send({ message: 'Token not found or invalid token', error: true })
}

module.exports = checkAdmin