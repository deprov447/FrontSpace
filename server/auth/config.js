const User = require("../models/User");
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

const initializePassport = (passport) => {
  const authenticateUser = async (username, password, done) => {
    const user = await User.findOne({ username });
    if (user == null) return done(null, false, { message: "No user found" });
    try {
      if (await bcrypt.compare(password, user.password)) {
        console.log("user found", user);
        return done(null, user);
      } else {
        console.log("password wrong");
        return done(null, false, { message: "Password wrong" });
      }
    } catch (err) {
      return err;
    }
  };
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) =>
    done(null, await User.findById(id))
  );
};

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.sendStatus(401);
};

const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.sendStatus(409);
  }
  return next();
};

const isAutherised = (req, res) => {
  if (req.user) {
    res.json({
      isAutherised: true,
      user: req.user,
    });
  } else {
    res.json({
      isAutherised: false,
      user: null,
    });
  }
};

module.exports = {
  initializePassport,
  checkAuthenticated,
  checkNotAuthenticated,
  isAutherised,
};
