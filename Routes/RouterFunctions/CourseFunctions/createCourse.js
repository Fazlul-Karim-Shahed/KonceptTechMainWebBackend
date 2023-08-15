const { Course } = require("../../../Models/CourseMode")
const _ = require('lodash')



const createCourse = async (req, res) => {

    let nameCheck = await Course.findOne({ courseName: req.body.courseName })
    
    if (nameCheck === null) {

        if (req.body.hasOwnProperty('courseName') && req.body.hasOwnProperty('description') && req.body.hasOwnProperty('createdBy') && req.body.hasOwnProperty('posterURL') && req.body.hasOwnProperty('courseFee')){


            let newCourse = new Course(req.body)
            let course = await newCourse.save()

            res.send({ error: false, data: course, message: 'Course created successfully' })
            
        }
        else{
            res.send({ error: true, message: 'Missing required value' })
        }

        

    }
    else {
        res.send({ error: true, message: 'Course already exists' })

    }

}

module.exports = createCourse