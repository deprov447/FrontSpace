const mongoose = require("mongoose");

const Categories = mongoose.model(
  "Categories",
  mongoose.Schema({
    name: String,
    img: String,
    desc: String,
  })
);

module.exports = Categories;
