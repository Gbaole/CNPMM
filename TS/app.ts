import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";
import studentRoutes from "./routes/studentRoutes";

// Load env vars
dotenv.config({ path: ".env" });

const app: Application = express();

// Body parser
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Connect to database and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });
});
