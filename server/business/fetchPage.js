const ejs = require("ejs");
const Pages = require("../models/Pages");
const Templates = require("../models/Templates");

module.exports = async (req, res) => {
  const subdomain = req.headers["x-subdomain"];
  const { templateId, formData } = await Pages.findOne({ subdomain });
  const { templateEJS } = await Templates.findById(templateId);
  res.send(ejs.render(templateEJS, formData));
};
