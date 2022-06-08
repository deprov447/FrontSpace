const { application } = require("express");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const router = require("./routes");
const app = express();
app.use(cors({
  corsOrigin: process.env.CLIENT_URL
}));
dotenv.config();

const PORT = 4000;

mongoose.connect(process.env.DB_ADDR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log(`Connected to DB`);
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
