const { default: mongoose } = require("mongoose");

const teacherSchema = mongoose.Schema({
    tId: {
        type: String,
        required: true
    },
    tName: {
        type: String,
        required: true
    },
    tDesignation: {
        type: String,
        required: true
    },
    tShift: {
        type: String,
        required: true
    },
    tJoiningDate: {
        type: String,
        required: true
    },
    tSalary: {
        type: String,
        required: true
    },
    tLate: {
        type: String,
        required: true
    },
    tAbsent: {
        type: String,
        required: true
    },
})

module.exports = teacherSchema;