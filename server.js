const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/backendProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
