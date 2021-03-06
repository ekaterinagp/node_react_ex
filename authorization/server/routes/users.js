const router = require("express").Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User");

router.post("/users/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    const users = await User.query()
      .select()
      .where({ username: username })
      .limit(1);
    const user = users[0];

    if (!user) {
      return res.status(404).send({ response: "Wrong username" });
    }

    if (username && password) {
      bcrypt.compare(password, user.password, (error, isSame) => {
        if (error) {
          return res.status(500).send({});
        }
        if (!isSame) {
          return res
            .status(404)
            .send({ response: "wrong password", user: JSON.stringify(user) });
        } else {
          return res.status(200).send({ username: user.username });
        }
      });
    } else {
      return res.status(404).send({ response: "Missing username or password" });
    }
  } catch (error) {
    console.log("my error");
    throw new Error(error);
  }
});

router.post("/users/register", (req, res) => {
  const { username, password, repeatPassword } = req.body;
  console.log(req.body);
  if (username && password && repeatPassword && password === repeatPassword) {
    if (password.length < 8) {
      return res
        .status(400)
        .send({ response: "Password does not fulfill the requirements" });
    } else {
      bcrypt.hash(password, saltRounds, async (error, hashedPassword) => {
        if (error) {
          return res.status(500).send({});
        }
        try {
          const existingUser = await User.query()
            .select()
            .where({ username: username })
            .limit(1);

          if (existingUser[0]) {
            return res.status(404).send({ response: "User already exists" });
          } else {
            const newUser = await User.query().insert({
              username,
              password: hashedPassword
            });

            return res.status(200).send({ username: newUser.username });
          }
        } catch (error) {
          return res
            .status(500)
            .send({ response: "Something went wrong with the database" });
        }
      });
    }
  } else {
    return res.status(404).send({ response: "Missing fields" });
  }
});

module.exports = router;
