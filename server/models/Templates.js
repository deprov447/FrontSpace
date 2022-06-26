const mongoose = require("mongoose");

const Templates = mongoose.model(
  "Templates",
  mongoose.Schema({
    templateCategory: String,
    templateName: String,
    templateThumb: String,
    templatePreviewURL: String,
    templateFormElements: [],
    templateString: String,
  })
);

module.exports = Templates;
