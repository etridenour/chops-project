import express, { Request, Response } from "express";
import { ClickTrackModel } from "../models/clickTrack";

export const clickTracksRouter = express.Router();

clickTracksRouter.get("/", async (req: Request, res: Response) => {
  const clickTracks = await ClickTrackModel.find({});
  return res.status(200).send(clickTracks);
});

clickTracksRouter.post("/", async (req: Request, res: Response, next) => {
  try {
    let exercise = await ClickTrackModel.create(req.body);
    res.status(201).json(exercise);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});

clickTracksRouter.put("/:id", async (req: Request, res: Response, next) => {
  try {
    let clickTrack = await ClickTrackModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(204).json(clickTrack);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});

clickTracksRouter.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    let exercise = await ClickTrackModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(204).json(exercise);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});
