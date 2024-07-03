const express = require('express');
const { getAllSalary, createSalary, updateSalary } = require('../controller/salaryController');

const router = express.Router();


router.get('/', getAllSalary)
router.post('/', createSalary)
router.put('/', updateSalary)


module.exports = router;
