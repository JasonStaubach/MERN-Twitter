const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    hashedPassword: {
      type: String,
      required: true
    }
  }, {
    //tells mongoose to create createdAt and updatedAt, like rails
    timestamps: true
  });

  module.exports = mongoose.model("User", userSchema)