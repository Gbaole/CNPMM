import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log(`✅ Database connected succesfully: ${conn.connection.host}`);
  } catch (error: any) {
    console.log("❌  Cannot connect to database");
    console.error(`❌ Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
