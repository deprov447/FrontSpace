const express = require("express");
const fetchCategoriesList = require("./business/fetchCategoriesList");
const fetchTemplateForm = require("./business/fetchTemplateForm");
const fetchTemplatesList = require("./business/fetchTemplatesList");
const router = express();

router.get("/categories", fetchCategoriesList);
router.get("/categories/:category_name", fetchTemplatesList);
router.get("/templates/:template_name", fetchTemplateForm);

module.exports = router;
