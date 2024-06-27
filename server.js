const express = require('express');
const mongoose = require('mongoose');
const app = express();
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



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', (req, res) => {
    res.send("Welcone")
})
app.use('/teacher', teacherRouter)




