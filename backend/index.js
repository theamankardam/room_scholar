const express = require("express");
const app = express();
const db = require("./src/db/db.js")
require("dotenv").config();
const propertyRoutes = require("./src/routes/propertyRoutes.js");
const cors = require('cors')



app.use(cors());
app.use(express.json());

app.use("/api/properties", propertyRoutes);



app.listen(5000, () => {
  console.log("Server running on port 5000");
});