const { default: mongoose } = require("mongoose")
const { Course } = require("../../../Models/CourseMode")
const _ = require('lodash')


const getOneCourse = async (req, res) => {


    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let course = await Course.findById(id).populate(['createdBy', 'updatedBy'])
        if (course === null) {
            res.send({ error: true, message: 'Course not found. Maybe course id is not valid' })
        }

        res.send({ error: false, message: 'Course found', data: course })

    }
    else {
        res.send({ error: true, message: 'Course id is not valid' })
    }



}

module.exports = getOneCourse