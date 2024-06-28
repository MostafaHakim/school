const { default: mongoose } = require("mongoose");

const teacherSchema = mongoose.Schema({
    tId: {
        type: String,
        required: true
    },
    tName: String,
    tDesignation: String,
    tShift: String,
    tSalary: {
        type: String,
        required: true
    },
    tLate: Number,
    tAbsent: Number,
    tAddition: Number,
    tDiduction: Number,
    tNetSalary: Number
})

module.exports = teacherSchema;