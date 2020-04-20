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
//limit the amount of requests on auth route
const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 4, // limit each IP to 4 requests per windowMs
});

app.use("/users/login", authLimiter);
app.use("/users/register", authLimiter);

//todo create a playround route and incluse it as a first route

const playgroundRouter = require("./routes/playground.js");
app.use(playgroundRouter);

const usersRouter = require("./routes/users.js");
app.use(usersRouter);
// const User = require("./models/User.js");
// app.get("/", async (req, res) => {
//   return res.send({ result: await User.query() });
// });

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error running express", error);
  }
  console.log("The server is running on port", server.address().port);
});
