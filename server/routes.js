const express = require("express");
const passport = require("passport");
const { verifyUser } = require("./auth/authenticate");
const signout = require("./auth/logout");
const refreshToken = require("./auth/refreshToken");
const { signinPassword } = require("./auth/signin");
const { signupPassword } = require("./auth/signup");
const fetchCategoriesList = require("./business/fetchCategoriesList");
const fetchPage = require("./business/fetchPage");
const fetchTemplateForm = require("./business/fetchTemplateForm");
const fetchTemplatesList = require("./business/fetchTemplatesList");
const fetchUser = require("./business/fetchUser");
const saveTemplateFormDetails = require("./business/saveTemplateFormDetails");

const router = express();

router
  .get("/categories", fetchCategoriesList)
  .get("/categories/:category_name", fetchTemplatesList)
  .get("/template/:template_id", verifyUser, fetchTemplateForm)
  .post("/template/:template_id", verifyUser, saveTemplateFormDetails)
  .post("/signup/password", signupPassword)
  .post("/refreshToken", refreshToken)
  .post("/signin/password", passport.authenticate("local"), signinPassword)
  .get("/fetchUser", verifyUser, fetchUser)
  .get("/signout", verifyUser, signout)
  .get("/", fetchPage);

module.exports = router;
