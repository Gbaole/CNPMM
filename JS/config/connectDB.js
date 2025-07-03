const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`✅ Database connected succesfully: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌  Cannot connect to database");
    console.error(`❌ Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
