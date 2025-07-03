import { Schema } from "mongoose";
import ViolationReportSchema from "./violationReport";

export interface IExamParticipation {
  examDate: Date;
  area?: string;
  room?: string;
  shift?: string;
  violation?: typeof ViolationReportSchema;
}

const ExamParticipationSchema =
  new Schema() <
  IExamParticipation >
  ({
    examDate: { type: Date, required: true },
    area: { type: String },
    room: { type: String },
    shift: { type: String },
    violation: { type: ViolationReportSchema, required: false }, // Có thể null nếu không vi phạm
  },
  { _id: false });

export default ExamParticipationSchema;
