const Student = require('../model/students.js');
const sendEmail = require('../utils.js');
const { isValidPhoneNumber } = require('libphonenumber-js');

// Function to create a new student
const createStudent = async (req, res) => {
    try{
        const { firstName, lastName, email, phone, interest } = req.body;

        // Validate the phone number
        if (!isValidPhoneNumber(phone, 'NG')){
            return res.status(400).json({ message: 'Invalid phone number' });
        }

        // Check if the student already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' });
        }

        // Create a new student
        const student = new Student({
            firstName,
            lastName,
            email,
            phone,
            interest
        });
        await student.save();
        // Send a welcome email
        const html = `<h1>Welcome ${firstName} ${lastName}</h1>
        <p>Thank you for registering with us. We are excited to have you on board!</p>
        <p>Your area of interest is: ${interest}</p>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Best regards,</p>
        <p>The Team</p>`;

        await sendEmail({
            email,
            subject: 'Welcome to jadedval',
            html
        })
        
        // Send a response back to the client
        res.status(201).json({ message: 'Student created successfully', student });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    createStudent,
    getAllStudents
}