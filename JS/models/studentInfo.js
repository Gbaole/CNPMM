const mongoose = require("mongoose");

const StudentInfoSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dob: String, // "YYYY-MM-DD"
    gender: String,
    studentClass: String,
    email: String,
    phone: String,
  },
  { _id: false }
);

module.exports = StudentInfoSchema;
