const Templates = require("../models/Templates")

module.exports = async (req, res) => {
  const template_name = req.params.template_name;
  const templateObj = await Templates.findById(template_name);
  res.json(templateObj);
};
