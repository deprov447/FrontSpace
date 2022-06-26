const Pages = require("../models/Pages");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const formData = req.body;

  const userId = jwt.decode(req.signedCookies.refreshToken)._id;
  const templateId = req.params.template_id;
  const subdomain = formData["Subdomain"];
  // check if already exist
  const subdomainExist = await Pages.findOne({ subdomain });
  if (subdomainExist) {
    if (subdomainExist.userId === userId) {
      await Pages.findOneAndUpdate({
        formData,
        templateId,
        subdomain,
      });
      res.sendStatus(201);
    } else {
      //http code for duplicate entry
      res.status = 409;
      res.json({ reason: "Subdomain already exist" });
    }
  } else {
    const page = new Pages({
      formData,
      templateId,
      userId,
      subdomain,
    });
    await page.save();
    res.sendStatus(201);
  }
};
