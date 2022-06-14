const express = require("express");
const fetchCategoriesList = require("./business/fetchCategoriesList");
const fetchTemplateForm = require("./business/fetchTemplateForm");
const fetchTemplatesList = require("./business/fetchTemplatesList");
const saveTemplateFormDetails = require("./business/saveTemplateFormDetails");
const router = express();

router.get("/categories", fetchCategoriesList);
router.get("/categories/:category_name", fetchTemplatesList);
router.get("/template/:template_id", fetchTemplateForm);
router.post("/template/:template_id", saveTemplateFormDetails);

module.exports = router;
