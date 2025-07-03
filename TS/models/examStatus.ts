import { Schema } from "mongoose";

export interface IExamStatus {
  examEligibility: "active" | "suspended" | "expelled";
  reason?: string;
}

const ExamStatusSchema = new Schema<IExamStatus>(
  {
    examEligibility: {
      type: String,
      enum: ["active", "suspended", "expelled"],
      default: "active",
      required: true,
    },
    reason: { type: String },
  },
  { _id: false }
);

export default ExamStatusSchema;
