const { default: mongoose } = require("mongoose")
const { Course } = require("../../../Models/CourseMode")
const _ = require('lodash')



const updateCourse = async (req, res) => {


    let id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {

        let course = await Course.findOne({ _id: id })
        if (course === null) {
            res.send({ error: true, message: 'Course not found. Maybe course id is not valid' })
        }

        else {
            let data = await course.updateOne(req.body)
            res.send({ error: false, message: 'Course updated', data: data })
        }
    }
    else {
        res.send({ error: true, message: 'Course id is not valid' })
    }



}

module.exports = updateCourse