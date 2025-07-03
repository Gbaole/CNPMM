const mongoose = require("mongoose");
const ViolationReportSchema = require("./violationReport");

const ExamParticipationSchema = new mongoose.Schema(
  {
    examDate: { type: Date, required: true },
    area: String,
    room: String,
    shift: String,
    violation: ViolationReportSchema, // Có thể null nếu không vi phạm
  },
  { _id: false }
);

module.exports = ExamParticipationSchema;
