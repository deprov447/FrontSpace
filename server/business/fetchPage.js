const ejs = require("ejs");

const Pages = require("../models/Pages");
const Templates = require("../models/Templates");

module.exports = async (req, res) => {
  const subdomain = req.headers["x-subdomain"];
  try {
    const ret = await Pages.findOne({ subdomain });
    if (ret == null) res.sendStatus(404);
    else {
      const { templateId, formData } = ret;
      const { templateString } = await Templates.findById(templateId);
      const html = ejs.render(templateString, { formData: formData });
      res.send(html);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};
