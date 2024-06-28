const Teacher = require('../model/teacherModel')

const getAllTeacher = async (req, res) => {
    try {
        const getTeacher = await Teacher.find()
        res.status(200).send(getTeacher)
    } catch (error) {
        res.status(500).json(error)
    }
}
const createTeacher = async (req, res) => {
    try {
        const { tId, tDesignation, tName, tShift } = req.body
        const postTeacher = new Teacher({
            tId, tDesignation, tName, tShift
        })
        const newTeacher = await postTeacher.save()
        res.status(200).send(newTeacher)
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { getAllTeacher, createTeacher }