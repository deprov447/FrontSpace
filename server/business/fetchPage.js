const Pages = require("../models/Pages");

module.exports = async (req, res) => {
  const subdomain = req.headers["x-subdomain"];
  const { templateId, formData } = await Pages.findOne({ subdomain });
  res.render(`../templates/${templateId}/index.ejs`, { formData: formData });
};
