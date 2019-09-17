const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
   }
//   published_date: {
//     type: Date
//   },
//   publisher: {
//     type: String
//   },
//   updated_date: {
//     type: Date,
//     default: Date.now
//   }
});

module.exports = Contact = mongoose.model("contact", ContactSchema);