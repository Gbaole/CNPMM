const mongoose = require("mongoose");

const StudentInfoSchema = require("./studentInfo");
const StudentInfoHistorySchema = new mongoose.Schema(
  {
    updatedAt: { type: Date, default: Date.now },
    fullName: { type: String },
    dob: String,
    gender: String,
    studentClass: String,
    email: String,
    phone: String,
  },
  { _id: false }
);

module.exports = StudentInfoHistorySchema;
