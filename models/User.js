import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true //공백 제거
  },
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    weight: Number,
    height: Number
  },
  id: mongoose.Schema.Types.ObjectId,
  singlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
