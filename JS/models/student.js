const mongoose = require("mongoose");
const StudentInfoSchema = require("./studentInfo");
const StudentInfoHistorySchema = require("./studentInfoHistory");
const ExamParticipationSchema = require("./examParticipation");
const ExamStatusSchema = require("./examStatus");

const StudentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  currentInfo: StudentInfoSchema,
  infoHistory: [StudentInfoHistorySchema],
  examParticipations: [ExamParticipationSchema],
  status: ExamStatusSchema,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

StudentSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
