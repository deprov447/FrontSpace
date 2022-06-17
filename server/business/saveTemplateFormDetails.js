const Pages = require("../models/Pages");

module.exports = async (req, res) => {
  const formData = req.body;
  const templateId = req.params.template_id;
  const subdomain = "sbdmn";
  const page = new Pages({
    formData,
    templateId,
    subdomain,
  });
  await page.save();
  res.sendStatus(201);
};
