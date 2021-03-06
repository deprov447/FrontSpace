const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const expressSession = require("express-session");

require("./auth/JwtStrategy");
require("./auth/LocalStrategy");
require("./auth/authenticate");

const router = require("./routes");

const PORT = 4000;

mongoose.connect(process.env.DB_ADDR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log(`Connected to DB`);
});

express()
  .set("view engine", "ejs")
  .use(express.urlencoded({ extended: true, limit: "20mb" }))
  .use(cookieParser(process.env.COOKIE_SECRET))
  .use(express.json({ limit: "20mb" }))
  .use(
    expressSession({
      secret: "eessecret",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  )
  .use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  )
  .use(passport.initialize())
  .use(router)
  .listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
