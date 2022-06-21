const User = require("../models/User");
const { getToken, getRefreshToken, COOKIE_OPTION } = require("./authenticate");

const signinPassword = (req, res, next) => {
  const token = getToken({ _id: req.user._id });
  const refreshToken = getRefreshToken({ _id: req.user._id });
  User.findById(req.user._id).then(
    (user) => {
      user.refreshToken.push({ refreshToken });
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          res.cookie("refreshToken", refreshToken, COOKIE_OPTION);
          res.send({ success: true, token });
        }
      });
    },
    (err) => next(err)
  );
};

module.exports = { signinPassword };
