const { Course } = require("../../../Models/CourseMode")
const _ = require('lodash')



const createCourse = async (req, res) => {

    let nameCheck = await Course.findOne({ courseName: req.body.courseName })
    
    if (nameCheck === null) {

        let newCourse = new Course(_.pick(req.body, ['courseName', 'description', 'courseFee', 'duration', 'enrolledNumber', 'posterURL']))

        let course = await newCourse.save()

        res.send({ error: false, data: course, message: 'Course created successfully' })



    }
    else {
        res.send({ error: true, message: 'Course already exists' })

    }

}

module.exports = createCourse