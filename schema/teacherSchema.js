const { default: mongoose } = require("mongoose");

const teacherSchema = mongoose.Schema({
    tId: String,
    tDesignation: String,
    tName: String,
    tShift: String
})

module.exports = teacherSchema;