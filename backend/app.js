const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors({
  origin: "https://vercel.com/ishs-projects-6ad24541/task-management-saas/DQqAThM4HvRhgWuQHHWx7Pfeaqaq",
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;