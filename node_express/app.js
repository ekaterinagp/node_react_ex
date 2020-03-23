// const express = require("express");
// const app = express();
// // const bodyParser = require("body-parser");
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
// //adding return to res.send helps avoiding server from crashing
// const port = 3000;

// const arrItems = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" },
//   { id: 4, name: "D" }
// ];

// app.get("items/:id", (req, res) => {
//   // res.send("up and running");
//   const id = req.params.id;
//   arrItems.forEach(item => {
//     if (item.id == id) {
//       return res.send(item);
//     }
//   });
// });

// app.get("/items", (req, res) => {
//   res.send(arrItems);
// });

// // app.use(function(req, res, next) {
// //   console.log("req.body", req.body); // populated!
// //   next();
// // });

// app.post("/items/create", (req, res) => {
//   console.log("Got body:", req.body);
//   let idNumber = arrItems[arrItems.length - 1].id;
//   // console.log(arrItems.last());
//   let item = { id: idNumber + 1, name: req.body.name };

//   arrItems.push(item);
//   res.send({ status: "1", item });
// });

// app.get("/time/currenttime", (req, res) => {
//   let d = new Date();
//   let time = d.toLocaleTimeString();
//   let date = d.toDateString();
//   let weekday = d.toLocaleDateString("en-us", { weekday: "long" });
//   console.log(date);

//   res.send(` Current date is ${date} and weekday ${weekday} and time ${time}`);
// });

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   return res.send({});
// });

// app.listen(port, error => {
//   if (error) {
//     console.log(`Error ${error}`);
//   }
//   console.log(`Express server listens to port ${port}`);
// });

//Anders's code
const express = require("express"),
  path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.get("/", function(req, res) {
  res.redirect("index.html");
});

app.get("/pathvariable/:customvalue/:multiple", (req, res) => {
  console.log(req.params);
  return res.send({});
});

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

app.get("/time", (req, res) => {
  const date = new Date();
  const localeTime = date.toLocaleTimeString();
  return res.send({
    time: date.getHours() + ":" + date.getMinutes(),
    timeVersionTwo: localeTime,
    weekday: weekdays[date.getDay()],
    weekdayVersionTwo: date.toLocaleDateString("en-us", { weekday: "long" })
  });
});

app.get("/search", (req, res) => {
  console.log(req.query);
  return res.send({});
});

/* CRUD API */

let cars = [
  { id: 1, type: "SUV" },
  { id: 2, type: "Volvo" },
  { id: 3, type: "BMW" }
];
let currentId = 3;

app.get("/cars", (req, res) => {
  return res.send({ response: cars });
});

app.get("/cars/:id", (req, res) => {
  const foundCar = cars.find(car => car.id === Number(req.params.id));
  return res.send({ response: foundCar });
});

app.post("/cars/", (req, res) => {
  const newCar = req.body;
  newCar.id = ++currentId;
  cars.push(newCar);
  return res.send({ response: newCar });
});

app.put("/cars/:id", (req, res) => {
  const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
  const newCar = { ...cars[foundIndex], ...req.body };
  cars[foundIndex] = newCar;

  return res.send({ response: newCar });
});

app.delete("/cars/delete/:id", (req, res) => {
  cars = cars.filter(car => car.id !== Number(req.params.id));
  return res.send({ response: cars });
});

app.listen(9090, error => {
  if (error) {
    console.log("Error running the server", error);
  }
  console.log("The server is running on port", 9090);
});
