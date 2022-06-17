const Pages = require("../models/Pages");

module.exports = async (req, res) => {
  const formData = req.body;
  const templateId = req.params.template_id;
  const subdomain = "sbdmn";
  // check if already exist
  const checkExist = await Pages.find({ subdomain });
  if (checkExist.length > 0) {
    await Pages.findOneAndUpdate({
      formData,
      templateId,
      subdomain,
    });
    res.sendStatus(201);
  } else {
    const page = new Pages({
      formData,
      templateId,
      subdomain,
    });
    await page.save();
    res.sendStatus(201);
  }
};
