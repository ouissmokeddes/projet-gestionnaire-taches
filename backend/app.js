const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/tasks"); 
app.use("/tasks", taskRoutes);

module.exports = app;
