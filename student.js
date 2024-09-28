const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: { type: String, required: true },
    marks: { type: Number, required: true },
});

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: Number,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    studentId: {
        type: Number,
        required: true,
    },
    subjects: [SubjectSchema], // Array of subjects
});

const student  = mongoose.model("Student",StudentSchema);
module.exports = student;
