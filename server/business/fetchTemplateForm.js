const Templates = require("../models/Templates");

module.exports = async (req, res) => {
  const template_id = req.params.template_id;
  const templateObj = await Templates.findById(template_id);
  res.json(templateObj);
};
