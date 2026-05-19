const express = require("express");
const app = express();
const db = require("./db/db.js");
require("dotenv").config();
const propertyRoutes = require("./routes/propertyRoutes.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());


db();
app.use("/api/properties", propertyRoutes);


app.get("/", (req, res) => {
  res.status(200).send("Backend API is running 🚀");
});



module.exports = app;