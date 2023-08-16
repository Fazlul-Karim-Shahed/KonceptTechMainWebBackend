require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const compression = require('compression')
const _ = require('lodash')
const UserRouter = require('./Routes/UserRouter')
const CourseRouter = require('./Routes/CourseRouter')
const ServiceRouter = require('./Routes/ServiceRouter')
const RegistrationRouter = require('./Routes/RegistrationRouter')
const DescriptiveSectionRouter = require('./Routes/DescriptiveSectionRouter')

// ------------ Configuration ------------  //

dotenv.config()
const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(compression())



// ------------ Database ------------  //
const DB = process.env.MONGODB_DATABASE.replace('<password>', process.env.MONGODB_PASS)
mongoose.set('strictQuery', false)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(data => console.log('Successfully connected to MongoDB Server'))
    .catch(data => {
        console.log('Something went wrong with MongoDB Server')
        console.log(data)
    })



// ------------ All Routers ------------ //
app.use('/user', UserRouter)
app.use('/course', CourseRouter)
app.use('/service', ServiceRouter)
app.use('/registration', RegistrationRouter)
app.use('/descriptive-section', DescriptiveSectionRouter)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Koncept Tech</h1>')
})


app.use((err, req, res, next) => {
    // console.log(err)
    res.status(500).send({ message: 'Something went wrong', error: true, data: _.pick(err, ['messageFormat', 'kind', 'value', 'path', 'valueType']) })
})

// ------------ Server ------------ //
const port = process.env.PORT
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})