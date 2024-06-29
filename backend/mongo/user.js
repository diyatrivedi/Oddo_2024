const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  fitnessGoal: {
    type: String,
    enum: ["Weight Loss", "Muscle Gain", "Maintain Fitness"],
    required: true,
  },
  healthConditions: {
    type: [String],
  },
});

exports.User = mongoose.model("User", userSchema);
