const express = require("express");
const app = express();
const db = require("./src/db/db.js");
require("dotenv").config();
const propertyRoutes = require("./src/routes/propertyRoutes.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// DB connect
db();

// routes
app.use("/api/properties", propertyRoutes);


app.get("/", (req, res) => {
  res.status(200).send("Backend API is running 🚀");
});


// ❌ NO app.listen here (IMPORTANT)
module.exports = app;