const { default: mongoose } = require("mongoose");

const teacherSchema = mongoose.Schema({
    tId: String,
    tName: String,
    tDesignation: String,
    tShift: String,
    tSalary: Number,
    tLate: Number,
    tAbsent: Number,
    tAddition: Number,
    tDiduction: Number,
    tNetSalary: Number
})

module.exports = teacherSchema;