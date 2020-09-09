const express = require("express");
const cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(cors()); // permite comunicacion entre dos servers
app.use(express.json()); // El server entendera json

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
