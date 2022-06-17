const Templates = require("../models/Templates");

module.exports = async (req, res) => {
  const category_name = req.params.category_name;
  const templatesArray = await Templates.find({
    templateCategory: category_name,
  });
  res.json(templatesArray);
};
