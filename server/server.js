const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const router = require("./routes");

dotenv.config();
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
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(
    cors({
      corsOrigin: process.env.CLIENT_URL,
    })
  )
  .use(router)
  .listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
