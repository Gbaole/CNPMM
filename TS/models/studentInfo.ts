import { Schema } from "mongoose";

export interface IStudentInfo {
  name: string;
  gender: "Nam" | "Nữ";
  dob: Date;
  class: string;
  major: string;
  course: string;
  email: string;
  phone: string;
  address: string;
}

const StudentInfoSchema = new Schema<IStudentInfo>(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Nam", "Nữ"], required: true },
    dob: { type: Date, required: true },
    class: { type: String, required: true },
    major: { type: String, required: true },
    course: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  { _id: false }
);

export default StudentInfoSchema;
