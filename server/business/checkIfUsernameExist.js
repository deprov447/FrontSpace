const User = require("../models/User");

const checkIfUsernameExist = async (req, res) => {
  const users = await User.find({ username: req.body.username });
  res.json({ doesUserExist: users.length > 0 });
};

module.exports = checkIfUsernameExist;
