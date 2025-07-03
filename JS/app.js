const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const studentRoutes = require("./routes/studentRoutes");

// Load env vars
dotenv.config({ path: ".env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
