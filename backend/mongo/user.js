const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // required: true,
    min: 1,
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, "User password required"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    // required: true,
  },
  height: {
    type: Number,
    // required: true,
  },
  weight: {
    type: Number,
    // required: true,
  },
  fitnessGoal: {
    type: String,
    enum: ["weight loss", "muscle gain", "maintain weight"],
    // required: true,
  },
  healthConditions: {
    type: [String],
  },
});
exports.User = mongoose.model("User", userSchema);
