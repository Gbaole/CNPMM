const mongoose = require("mongoose");

//giám thị
const InvigilatorSchema = new mongoose.Schema(
  {
    staffId: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

module.exports = InvigilatorSchema;
