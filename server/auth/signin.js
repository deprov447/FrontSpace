const passport = require("passport");

const signinPassword = passport.authenticate("local", {
  successReturnToOrRedirect: "/isAutherised",
});

module.exports = { signinPassword };
