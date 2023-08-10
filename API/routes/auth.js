const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// *REGISTER USER*
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// *LOGIN USER*
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(404).json("wrong password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
