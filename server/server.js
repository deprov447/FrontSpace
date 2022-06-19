const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

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
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(
    cors({
      corsOrigin: process.env.CLIENT_URL,
    })
  )
  .use(flash())
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
