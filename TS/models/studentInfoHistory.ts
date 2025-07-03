import { Schema } from "mongoose";

export interface IStudentInfoHistory {
  updatedAt: Date;
  fullName?: string;
  dob?: Date;
  gender?: string;
  studentClass?: string;
  email?: string;
  phone?: string;
}

const StudentInfoHistorySchema = new Schema<IStudentInfoHistory>(
  {
    updatedAt: { type: Date, default: Date.now },
    fullName: { type: String },
    dob: { type: Date },
    gender: { type: String },
    studentClass: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { _id: false }
);

export default StudentInfoHistorySchema;
