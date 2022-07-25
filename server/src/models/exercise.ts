import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    timeSignatureTopNumber: {type: Number, required: true},
    timeSignatureBottomNumber: {type: Number, required: true},
    measureCount: {type: Number, required: true},
});

const ExerciseModel = mongoose.model('Exercise', exerciseSchema);

export { ExerciseModel };