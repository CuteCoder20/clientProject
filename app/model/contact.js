const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactModel = new mongoose.model("contact", contactSchema);

module.exports = contactModel;
