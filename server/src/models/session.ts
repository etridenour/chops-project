import mongoose, { Schema } from "mongoose";

const sessionSchema = new mongoose.Schema({
  name: String,
  clickTracks: Schema.Types.Mixed,
  totalTimeDisplay: String,
  totalTimeMilliseconds: Number,
  totalCounts: Number,
});

const SessionModel = mongoose.model("Session", sessionSchema);

export { SessionModel };
