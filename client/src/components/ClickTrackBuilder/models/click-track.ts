export interface IClickTrack {
  _id?: string;
  name: string;
  clickTrackItems: IClickTrackItem[];
  totalTime?: string;
  totalCounts?: number;
  category: string;
  exerciseId: string;
}

export interface IClickTrackItem {
  countIn: number;
  countInType: string;
  duration: number;
  durationType: string;
  timeSignatureTopNumber: number;
  timeSignatureBottomNumber: number;
  tempoType: string;
  tempo: number;
  countsBetween: number;
  countsBetweenType: string;
  totalCounts: number;
  totalTime: string;
}
