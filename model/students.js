const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    interest: {
        type: String,
        enum: [
            'UI/UX Design',
            'Frontend Development',
            'Backend Development',
            'Blockchain Technology'
        ],
        required: true
    }
})

const Student = mongoose.model('students', studentSchema);
module.exports = Student;