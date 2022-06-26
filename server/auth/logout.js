const User = require("../models/User");
const { COOKIE_OPTION } = require("./authenticate");

const signout = (req, res, next) => {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;
  console.log("reftoken in signout", refreshToken);

  User.findById(req.user._id).then(
    (user) => {
      const tokenIndex = user.refreshToken.findIndex(
        (item) => item.refreshToken === refreshToken
      );

      if (tokenIndex !== -1) {
        user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove();
      }

      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          console.log(res);
          res.clearCookie("refreshToken", COOKIE_OPTION);
          res.send({ success: true });
        }
      });
    },
    (err) => next(err)
  );
};

module.exports = signout;
