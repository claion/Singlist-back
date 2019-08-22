import mongoose from "mongoose";

const recommendSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  singlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song"
    }
  ]
});

module.exports = mongoose.model("Recommend", recommendSchema);
