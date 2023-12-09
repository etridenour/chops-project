import mongoose from "mongoose";

const clickTrackSchema = new mongoose.Schema({
  exerciseId: { type: String },
  exerciseName: String,
  name: { type: String, required: true },
  clickTrackItems: {
    type: [
      {
        countIn: Number,
        countInType: String,
        duration: Number,
        durationType: String,
        timeSignatureTopNumber: Number,
        timeSignatureBottomNumber: Number,
        tempoType: String,
        tempo: Number,
        countsBetween: Number,
        countsBetweenType: String,
        totalCounts: Number,
        totalTimeDisplay: String,
        totalTimeMilliseconds: Number,
      },
    ],
    required: true,
  },
  totalTimeDisplay: { type: String },
  totalTimeMilliseconds: Number,
  totalCounts: { type: Number, required: true },
  category: String,
});

const ClickTrackModel = mongoose.model("ClickTrack", clickTrackSchema);

export { ClickTrackModel };
