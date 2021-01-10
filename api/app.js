const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// require("dotenv/config");

const PORT = 5000;
const connectionString = "mongodb://db:27017/mladen-db"
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
mongoose.connect(connectionString, options, (err) => {
  if (err) {
    console.log("Can't connect to MongoDB");
  } else {
    console.log("Connected to MongoDB");
  }
});

//Listening the server
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
