const User = require("../models/User");
const { getToken, getRefreshToken, COOKIE_OPTION } = require("./authenticate");

const signupPassword = (req, res, next) => {
  console.log("signup/password hit");
  if (!req.body.username) {
    res.statusCode = 500;
    res.send({ name: "username-error", message: "username required" });
  } else {
    User.register(
      new User({
        username: req.body.username,
      }),
      req.body.password,
      async (err, user) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.send(err);
        } else {
          user.username = req.body.username;
          const token = getToken({
            _id: user._id,
          });
          const refreshToken = getRefreshToken({
            _id: user._id,
          });
          user.refreshToken.push({ refreshToken });
          await user.save((err, user) => {
            if (err) {
              res.statusCode = 500;
              res.send(err);
            } else {
              res.cookie("refreshToken", refreshToken, COOKIE_OPTION);
              res.send({ success: true, token });
            }
          });
        }
      }
    );
  }
};

module.exports = { signupPassword };
