const passport = require("passport");

const signinPassword = passport.authenticate("local", {
  successRedirect: "https://google.com",
  failureRedirect: "https://yahoo.com",
  successFlash: true,
  failureFlash: true,
});

module.exports = { signinPassword };
