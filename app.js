require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const teacherRouter = require('./routes/teacherRoute')
const salaryRouter = require('./routes/salaryRoute')
const mothRouter = require('./routes/monthRoute')
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
app.use(cors({
    origin: "*"
}));


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Welcome")
})
app.use('/api/teacher', teacherRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/month', mothRouter)



app.listen(PORT, () => {
    console.log(`server is start at the port of ${PORT}`)
})

module.exports = app;
