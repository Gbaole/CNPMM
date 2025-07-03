import { Schema } from "mongoose";
import InvigilatorSchema, { IInvigilator } from "./invigilator";

export interface IViolationReport {
  hasViolation?: boolean;
  level?: "khiển trách" | "cảnh cáo" | "đình chỉ" | "đuổi học";
  description?: string;
  invigilators?: IInvigilator[];
  notes?: string;
}

const ViolationReportSchema = new Schema<IViolationReport>(
  {
    hasViolation: { type: Boolean, default: false },
    level: {
      type: String,
      enum: ["khiển trách", "cảnh cáo", "đình chỉ", "đuổi học"],
    },
    description: { type: String },
    invigilators: [InvigilatorSchema],
    notes: { type: String },
  },
  { _id: false }
);

export default ViolationReportSchema;
