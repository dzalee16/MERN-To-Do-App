const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Import routes
const todosRoute = require("./routes/todos");

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Access to the route (middlewares)
app.use("/todos", todosRoute);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to DB Mladen")
);

//Listening the server
app.listen(8080);
