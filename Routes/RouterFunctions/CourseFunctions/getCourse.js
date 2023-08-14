const { Course } = require("../../../Models/CourseMode")

const getCourse = async (req, res) => {

    let course = await Course.find()

    if (course.length === 0) {
        res.send({ error: true, message: 'No course found' })
    }
    else {
        res.send({ error: false, data: course, message: course.length + ' course found' })
    }

}


module.exports = getCourse