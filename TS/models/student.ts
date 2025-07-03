import mongoose, { Document, Schema, Model } from "mongoose";
import StudentInfoSchema, { IStudentInfo } from "./studentInfo";
import StudentInfoHistorySchema, {
  IStudentInfoHistory,
} from "./studentInfoHistory";
import ExamParticipationSchema, {
  IExamParticipation,
} from "./examParticipation";
import ExamStatusSchema, { IExamStatus } from "./examStatus";

export interface IStudent extends Document {
  studentId: string;
  currentInfo: IStudentInfo;
  infoHistory: IStudentInfoHistory[];
  examParticipations: IExamParticipation[];
  status: IExamStatus;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema = new Schema<IStudent>({
  studentId: { type: String, required: true, unique: true },
  currentInfo: { type: StudentInfoSchema, required: true },
  infoHistory: [StudentInfoHistorySchema],
  examParticipations: [ExamParticipationSchema],
  status: { type: ExamStatusSchema, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

StudentSchema.pre<IStudent>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Student: Model<IStudent> = mongoose.model<IStudent>(
  "Student",
  StudentSchema
);

export default Student;
