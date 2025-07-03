import { Schema } from "mongoose";

export interface IInvigilator {
  staffId: string;
  name: string;
}

const InvigilatorSchema = new Schema<IInvigilator>(
  {
    staffId: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

export default InvigilatorSchema;
