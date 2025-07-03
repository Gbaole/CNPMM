const mongoose = require("mongoose");

const ExamStatusSchema = new mongoose.Schema(
  {
    examEligibility: {
      type: String,
      enum: ["active", "suspended", "expelled"],
      default: "active",
    }, // active | suspended | expelled
    reason: String, // Lý do nếu bị cấm thi
  },
  { _id: false }
);

module.exports = ExamStatusSchema;
