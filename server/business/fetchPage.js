const Pages = require("../models/Pages");

module.exports = async (req, res) => {
  const subdomain = req.headers["x-subdomain"];
  const ret = await Pages.findOne({ subdomain });
  if (ret == null) res.sendStatus(404);
  else {
    const { templateId, formData } = ret;
    res.render(`../templates/${templateId}/index.ejs`, { formData: formData });
  }
};
