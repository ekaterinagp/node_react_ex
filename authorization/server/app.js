const express = require("express");
const app = express();
const port = process.env.PORT || 9090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup database

const { Model } = require("objection");
const Knex = require("knex"); //library
const knexfile = require("./knexfile.js"); //file contains credentials

// Initialize knex.
const knex = Knex(knexfile.development);

// Give the knex instance to objection.
Model.knex(knex);

//end database

app.get("/", async (req, res) => {
  const addresses = await knex.select().from("addresses");
  return res.send({ addresses });
});

const server = app.listen(port, error => {
  if (error) {
    console.log("Error running express", error);
  }
  console.log("The server is running on port", server.address().port);
});
