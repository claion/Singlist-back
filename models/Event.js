import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  startAt: {
    type: Date,
    required: true
  },
  endAt: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Event", eventSchema);
