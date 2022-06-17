const Categories = require("../models/Categories");

module.exports = async (req, res) => {
  console.log("category hit");
  const categoriesArray = await Categories.find();
  res.json(categoriesArray);
};
