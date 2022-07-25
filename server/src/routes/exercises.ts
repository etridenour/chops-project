import express, { Request, Response } from "express";
import { ExerciseModel } from "../models/exercise";

export const exercisesRouter = express.Router();

exercisesRouter.get("/", async (req: Request, res: Response) => {
  const exercise = await ExerciseModel.find({});
  return res.status(200).send(exercise);
});

exercisesRouter.post("/", async (req: Request, res: Response, next) => {
  // res.status(500).send('no')
  try {
    let exercise = await ExerciseModel.create(req.body);
    res.status(201).json(exercise);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});

exercisesRouter.put("/:id", async (req: Request, res: Response, next) => {
  try {
    let exercise = await ExerciseModel.findOneAndUpdate({'_id': req.params.id}, req.body);
    res.status(204).json(exercise);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});

exercisesRouter.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    let exercise = await ExerciseModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(204).json(exercise);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});
