const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Session = new mongoose.Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const User = new mongoose.Schema({
  username: String,
  authStrategy: {
    type: String,
    default: "local",
  },
  refreshToken: {
    type: [Session],
  },
});

User.set("toJSON", {
  transform: (doc, ret, opts) => {
    delete ret.refreshToken;
    return ret;
  },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
