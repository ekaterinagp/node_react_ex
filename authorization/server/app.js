const express = require("express");
const app = express();
const port = process.env.PORT || 9090;
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//setup database

const { Model } = require("objection");
const Knex = require("knex"); //library
const knexfile = require("./knexfile.js"); //file contains credentials

// Initialize knex.
const knex = Knex(knexfile.development);

// Give the knex instance to objection.
Model.knex(knex);

//end database

const usersRouter = require("./routes/users.js");
app.use(usersRouter);
// const User = require("./models/User.js");
// app.get("/", async (req, res) => {
//   return res.send({ result: await User.query() });
// });

const server = app.listen(port, error => {
  if (error) {
    console.log("Error running express", error);
  }
  console.log("The server is running on port", server.address().port);
});
