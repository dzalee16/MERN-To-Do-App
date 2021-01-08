const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const PORT = 5000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Import routes
const todosRoute = require("./routes/todos");

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Access to the route (middlewares)
app.use("/todos", todosRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, options, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to MongoDB Mladen");
  }
});

//Listening the server
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
