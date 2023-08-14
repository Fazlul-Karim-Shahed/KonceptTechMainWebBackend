const { Users } = require("../../../Models/UserModel")
const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signinUser = async (req, res) => {

    let user = await Users.findOne({ email: req.body.email })

    if (user === null || !user) {
        res.send({ error: true, message: 'Email not found.' })
    }
    else {

        let passCheck = await bcrypt.compare(req.body.password, user.password)
        if (passCheck) {

            let token = jwt.sign(_.pick(user, ['_id', 'name', 'mobile', 'email', 'role']), process.env.SECRET_KEY, { expiresIn: '1h' })

            res.send({ error: false, data: token , message: 'Login successful' })

        }
        else {
            res.send({ error: true, message: 'Password not matched' })

        }


    }


}

module.exports = signinUser