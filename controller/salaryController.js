const Salary = require('../model/salaryModel')


const getAllSalary = async (req, res) => {
    try {
        const getSalary = await Salary.find()
        res.status(201).json(getSalary)
    } catch (error) {
        res.status(500).json(error)
    }
}
const createSalary = async (req, res) => {
    try {
        const {
            tId,
            tName,
            tDesignation,
            tShift,
            tJoiningDate,
            tSalary,
            tSmonth,
            tLate,
            tAbsent,
            tDiduction,
            tAddition,
            tNetSalary
        } = req.body;
        const newSalary = Salary({
            tId,
            tName,
            tDesignation,
            tShift,
            tJoiningDate,
            tSalary,
            tSmonth,
            tLate,
            tAbsent,
            tDiduction,
            tAddition,
            tNetSalary
        })
        const createdSalary = await newSalary.save()
        res.status(201).json(createdSalary)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateSalary = async (req,res) =>{
    const {tId , tAddition} = req.body;
    const updateOne= await Salary.findOneAndUpdate({tId},{$set:{
        tAddition,
    }})
   res.status(201).json(updateOne)

}
module.exports = { getAllSalary, createSalary,updateSalary }