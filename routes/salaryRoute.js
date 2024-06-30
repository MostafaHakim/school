const express = require('express');
const { getAllSalary, createSalary } = require('../controller/salaryController');

const router = express.Router();


router.get('/', getAllSalary)
router.post('/', createSalary)


module.exports = router;
