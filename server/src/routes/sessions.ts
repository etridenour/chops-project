import express, { Request, Response } from "express";
import { SessionModel } from "../models/session";

export const sessionsRouter = express.Router();

sessionsRouter.get("/", async (req: Request, res: Response) => {
  const session = await SessionModel.find({});
  return res.status(200).send(session);
});

sessionsRouter.post("/", async (req: Request, res: Response, next) => {
  try {
    let session = await SessionModel.create(req.body);
    res.status(201).json(session);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});

sessionsRouter.put("/:id", async (req: Request, res: Response, next) => {
  try {
    let session = await SessionModel.findOneAndUpdate({'_id': req.params.id}, req.body);
    res.status(204).json(session);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});

sessionsRouter.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    let session = await SessionModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(204).json(session);
  } catch (err) {
    err ? res.status(500).json({ msg: "Error: " + err + "." }) : next(err);
  }
});
