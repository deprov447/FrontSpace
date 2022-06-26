const mongoose = require("mongoose");

const Pages = mongoose.model(
  "Pages",
  mongoose.Schema({
    templateId: String,
    userId: String,
    subdomain: String,
    formData: Object,
  })
);

module.exports = Pages;
