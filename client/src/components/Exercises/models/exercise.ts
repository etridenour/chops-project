import { IClickTrack } from "../../ClickTrackBuilder/models/click-track";

export interface IExercise {
    _id: string;
    name: string;
    timeSignatureTopNumber: number;
    timeSignatureBottomNumber: number;
    measureCount: number;
    clickTracks: IClickTrack[];
}