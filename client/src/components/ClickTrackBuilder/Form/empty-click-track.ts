import { getDurationTotals, getTotalTimeDisplay } from "../../../shared/utils/get-click-track-totals";
import { IClickTrack, IClickTrackItem } from "../models/click-track";

export const EMPTY_CLICK_TRACK_ITEM: IClickTrackItem = {
  countIn: 8,
  countInType: "counts",
  duration: 8,
  durationType: "measures",
  timeSignatureTopNumber: 4,
  timeSignatureBottomNumber: 4,
  tempo: 120,
  tempoType: "quarter",
  countsBetween: 4,
  countsBetweenType: "counts",
  totalCounts: 0,
  totalTime: "",
};

export function getEmptyClickTrackItem(): IClickTrackItem {
  const totals = getDurationTotals(EMPTY_CLICK_TRACK_ITEM, null);
  return {
    ...EMPTY_CLICK_TRACK_ITEM,
    totalCounts: totals.counts,
    totalTime: getTotalTimeDisplay(totals.time)
  }
}

export const EMPTY_CLICK_TRACK_ITEMS: IClickTrackItem[] = [
  getEmptyClickTrackItem(),
];

export const EMPTY_CLICK_TRACK: IClickTrack = {
  name: "",
  category: "",
  clickTrackItems: EMPTY_CLICK_TRACK_ITEMS,
  totalTime: "",
  totalCounts: 0,
  exerciseId: "",
};
