import path from "path";
import express from "express";
import cors from "cors";

require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Connect Database
if (process.env.NODE_ENV !== "test") {
  connectDB();
}

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/backend", require("./routes/api/backend"));
app.use("/api/article", require("./routes/api/article"));

// TODO: These need to be changed in the future.
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
