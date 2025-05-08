const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents } = require('../controller/studentController.js');


router.post('/enroll', createStudent);
router.get('/students', getAllStudents);

// Export the router
module.exports = router;