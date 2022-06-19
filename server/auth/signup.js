const User = require("../models/User");
const bcrypt = require("bcrypt");

const signupPassword = async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPass,
    });
    console.log(user);
    await user.save();
    res.sendStatus(202);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = { signupPassword };
