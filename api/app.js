const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const landingRoute = require("./routes/landing");

const app = express();

//Middlewares
// app.use("/home", () => {
//   console.log("This is the middlewares");
// });

//ROUTES
// app.get("/", (req, res) => {
//   res.send("We are on the server");
// });

//Access to the route
app.use("/", landingRoute);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to DB Mladen2")
);

//How to lisening the server
app.listen(8080);
