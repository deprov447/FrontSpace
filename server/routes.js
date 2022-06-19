const express = require("express");
const {
  checkAuthenticated,
  checkNotAuthenticated,
  isAutherised,
} = require("./auth/config");
const { signinPassword } = require("./auth/signin");
const signout = require("./auth/signout");
const { signupPassword } = require("./auth/signup");
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
  .post("/template/:template_id", checkAuthenticated, saveTemplateFormDetails)
  .post("/signin/password", checkNotAuthenticated, signinPassword)
  .post("/signup/password", checkNotAuthenticated, signupPassword)
  .post("/signout/", checkAuthenticated, signout)
  .get("/isAutherised", isAutherised)
  .get("/", fetchPage);

module.exports = router;
