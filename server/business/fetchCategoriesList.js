const Categories = require("../models/Categories");

module.exports = async (req, res) => {
  const categoriesArray = await Categories.find();
  res.json(categoriesArray);
};
