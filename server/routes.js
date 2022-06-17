const express = require("express");
const fetchCategoriesList = require("./business/fetchCategoriesList");
const fetchPage = require("./business/fetchPage");
const fetchTemplateForm = require("./business/fetchTemplateForm");
const fetchTemplatesList = require("./business/fetchTemplatesList");
const saveTemplateFormDetails = require("./business/saveTemplateFormDetails");
const router = express();

router
  .get("/categories", fetchCategoriesList)
  .get("/categories/:category_name", fetchTemplatesList)
  .get("/template/:template_id", fetchTemplateForm)
  .post("/template/:template_id", saveTemplateFormDetails)
  .get("/", fetchPage);

module.exports = router;
