require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const MONGODB_URI = process.env.MONGODB_URI
const cors = require('cors')
const teacherRouter = require('./routes/teacherRoute')

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (err) => {
    console.log("db is not connected:", err)
})

db.on('connected', () => {
    console.log('Mongoose connected to the database');
});


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/teacher', teacherRouter)




