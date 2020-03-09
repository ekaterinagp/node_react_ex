const express = require("express");
const app = express();

//adding return to res.send helps avoiding server from crashing
const port = 3000;

app.get("/", (req, res) => {
  res.send("up and running");
});

// app.get("/pathvariable/:customvalue/:multiple", (req, res) => {
//   console.log(req.params);
//   const customvalue = req.params.customvalue;
//   res.send({});
// });

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
