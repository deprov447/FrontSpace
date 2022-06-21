const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const router = require("./routes");
const { initializePassport } = require("./auth/config");

const PORT = 4000;

mongoose.connect(process.env.DB_ADDR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log(`Connected to DB`);
});

initializePassport(passport);

express()
  .set("view engine", "ejs")
  .use(cookieParser())
  .use(
    cors({
      corsOrigin: process.env.CLIENT_URL,
      credentials: true,
      optionSuccessStatus: 200,
    })
  )
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .use(router)
  .listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
