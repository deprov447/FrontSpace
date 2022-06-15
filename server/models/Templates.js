const mongoose = require("mongoose");

const Templates = mongoose.model(
  "Templates",
  mongoose.Schema({
    templateCategory: String,
    templateName: String,
    templateThumb: String,
    templatePreviewURL: String,
    templateEJS: String,
    templateFormElements: [],
  })
);

module.exports = Templates;
