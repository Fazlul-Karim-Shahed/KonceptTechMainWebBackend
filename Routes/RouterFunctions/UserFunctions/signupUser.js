const { Users } = require("../../../Models/UserModel")
const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signupUser = async (req, res) => {

    let user = await Users.findOne({ $or: [{ email: req.body.email }, { mobile: req.body.mobile }] })

    if (user === null || !user) {

        let newUser = new Users(_.pick(req.body, ['name', 'email', 'password', 'mobile']))
        let salt = await bcrypt.genSalt(10)
        let hashedPass = await bcrypt.hash(newUser.password, salt)

        newUser.password = hashedPass

        let data = await newUser.save()

        let token = await jwt.sign(_.pick(data, ['name', 'mobile', 'email', 'role', '_id']), process.env.SECRET_KEY, { expiresIn: '1h' })
        res.send({ error: false, data: token , message: 'User registration successful' })

    }
    else {

        res.send({ error: true, message: 'Email or Mobile already exists.' })

    }


}

module.exports = signupUser