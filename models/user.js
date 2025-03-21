const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLM = require("passport-local-mongoose");

// User-model schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// plugins for passport-local-mongoose to generate user and passwords
userSchema.plugin(passportLM);

// Creating & exporting user-model
const User = mongoose.model("User", userSchema);
module.exports = User;
