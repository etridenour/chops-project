import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  timeSignatureTopNumber: { type: Number, required: true },
  timeSignatureBottomNumber: { type: Number, required: true },
  measureCount: { type: Number, required: true },
  clickTracks: {
    type: [
      {
        name: { type: String, required: true },
        clickTrackItems: {
          type: [
            {
              numberOfReps: Number,
              tempo: Number,
              countIn: Number,
              countsBetweenReps: Number,
            },
          ],
          required: true,
        },
        totalTime: { type: String, required: true },
        totalCounts: { type: Number, required: true },
      },
    ],
  },
});

const ExerciseModel = mongoose.model("Exercise", exerciseSchema);

export { ExerciseModel };
