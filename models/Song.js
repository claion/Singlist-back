import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Song", songSchema);
