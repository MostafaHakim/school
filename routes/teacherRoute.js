const express = require('express')
const { getAllTeacher, createTeacher } = require('../controller/teacherController')
const router = express.Router()

router.get('/', getAllTeacher)
router.post('/', createTeacher)


module.exports = router;