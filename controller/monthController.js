const monthModel = require('../model/monthModel')


const getAllMonth = async (req, res) => {
    try {
        const getMonth = await monthModel.find();
        res.status(201).json(getMonth)
    } catch (error) {
        res.status(500).json(error)
    }
}
const createMonth = async (req, res) => {
    try {
        const { mName } = req.body;
        const newMonth = new monthModel({
            mName,
        });
        const finisMonth = await newMonth.save()
        res.status(201).json(finisMonth)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAllMonth, createMonth }