const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { getToken, getRefreshToken, COOKIE_OPTION } = require("./authenticate");

const refreshToken = (req, res, next) => {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;

  if (refreshToken) {
    try {
      const payload = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      const userId = payload._id;
      User.findById(userId).then((user) => {
        if (user) {
          const tokenIndex = user.refreshToken.findIndex(
            (item) => item.refreshToken === refreshToken
          );
          if (tokenIndex === -1) {
            res.statusCode = 401;
            res.send("unauthorised");
          } else {
            const token = getToken({ _id: userId });
            const newRefreshToken = getRefreshToken({ _id: userId });
            user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken };
            user.save((err, user) => {
              if (err) {
                res.statusCode = 500;
                res.send(err);
              } else {
                res.cookie("refreshToken", newRefreshToken, COOKIE_OPTION);
                res.send({ success: true, token });
              }
            });
          }
        } else {
          res.statusCode = 401;
          res.send("unauthorised");
        }
      });
    } catch (err) {
      res.statusCode = 401;
      res.send("Unauthorized");
    }
  } else {
    res.statusCode = 401;
    res.send("Unauthorised");
  }
};

module.exports = refreshToken;
