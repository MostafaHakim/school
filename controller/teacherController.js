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
        const { name, age } = req.body
        const postTeacher = new Teacher({
            name,
            age
        })
        const newTeacher = await postTeacher.save()
        res.status(200).send(newTeacher)
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { getAllTeacher, createTeacher }