const router = require("express").Router();

router.get("/firstpath", (req, res) => {
  // res.redirect("/secondpath");
  // res.send({ message: "This is a first route" });
  // console.log("Hit the first path");
  res.status(200).send({ message: "go to next" });
  // res.status(200);
  // next();
});

router.get("/secondpath", (req, res, next) => {
  console.log("Hit is first time");
  next();
});

router.get("/secondpath", (req, res) => {
  console.log("Hit it second time time");
  return res.send({ message: "This is a second route" });
});

module.exports = router;
