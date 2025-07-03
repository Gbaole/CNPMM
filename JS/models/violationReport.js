const mongoose = require("mongoose");
const InvigilatorSchema = require("./invigilator");

const ViolationReportSchema = new mongoose.Schema(
  {
    hasViolation: { type: Boolean, default: false },
    level: {
      type: String,
      enum: ["khiển trách", "cảnh cáo", "đình chỉ", "đuổi học"],
    },
    description: String,
    invigilators: [InvigilatorSchema], // Danh sách giám thị liên quan
    notes: String,
  },
  { _id: false }
);

module.exports = ViolationReportSchema;
