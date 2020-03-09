const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//adding return to res.send helps avoiding server from crashing
const port = 3000;

const arrItems = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" }
];

app.get("items/:id", (req, res) => {
  // res.send("up and running");
  const id = req.params.id;
  arrItems.forEach(item => {
    if (item.id == id) {
      return res.send(item);
    }
  });
});

app.get("/items", (req, res) => {
  res.send(arrItems);
});

// app.use(function(req, res, next) {
//   console.log("req.body", req.body); // populated!
//   next();
// });

app.post("/items/create", (req, res) => {
  console.log("Got body:", req.body);
  let idNumber = arrItems[arrItems.length - 1].id;
  // console.log(arrItems.last());
  let item = { id: idNumber + 1, name: req.body.name };

  arrItems.push(item);
  res.send({ status: "1", item });
});

app.get("/time/currenttime", (req, res) => {
  let d = new Date();
  let time = d.toLocaleTimeString();
  let date = d.toDateString();
  let weekday = d.toLocaleDateString("en-us", { weekday: "long" });
  console.log(date);

  res.send(` Current date is ${date} and weekday ${weekday} and time ${time}`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  return res.send({});
});

app.listen(port, error => {
  if (error) {
    console.log(`Error ${error}`);
  }
  console.log(`Express server listens to port ${port}`);
});
