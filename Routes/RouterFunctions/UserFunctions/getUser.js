const { Users } = require("../../../Models/UserModel")



const getUser = async (req, res) => {

    let data = await Users.find()
    if (data.length === 0) {
        res.send({ error: true, message: 'No user found' })
    }
    else {
        res.send({ error: false, data: data, message: 'No user found' })
    }

}

module.exports = getUser