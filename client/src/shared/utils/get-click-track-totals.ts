import { IClickTrack, IClickTrackItem } from "../../components/ClickTrackBuilder/models/click-track";
import { IExercise } from "../../components/Exercises/models/exercise";

export function addClickTrackTotals(
  clickTrack: IClickTrack,
  exercise: IExercise | null
): IClickTrack {
  if (!clickTrack.clickTrackItems?.length) {
    return { ...clickTrack, totalCounts: 0, totalTime: "0" };
  }
  let totalTime = 0;
  let totalCounts = 0;
  clickTrack.clickTrackItems.forEach((item) => {
    const durationTotals = getDurationTotals(item, exercise);
    item.totalCounts = durationTotals.counts;
    item.totalTime = getTotalTimeDisplay(durationTotals.time);
    totalCounts += durationTotals.counts;
    totalTime += durationTotals.time;
  });

  return {
    ...clickTrack,
    totalCounts,
    totalTime: getTotalTimeDisplay(totalTime)
  };
}

export function getDurationTotals(
  item: IClickTrackItem,
  exercise: IExercise | null
): { counts: number; time: number } {
  if (item.durationType === "reps" && exercise) {
    const counts =
      item.countIn +
      exercise.measureCount * exercise.timeSignatureTopNumber +
      item.countsBetween * item.duration;
    return { counts, time: getTime(counts, item.tempo) };
  }
  if (item.durationType === "counts") {
    return {
      counts: item.countIn + item.duration,
      time: getTime(item.duration, item.tempo),
    };
  }
  if (item.durationType === "measures") {
    const counts = item.countIn + item.duration * item.timeSignatureTopNumber;
    return { counts, time: getTime(counts, item.tempo) };
  }
  if (item.durationType === "minutes") {
    const counts = item.countIn + item.tempo * item.duration;
    return { counts, time: getTime(counts, item.tempo) };
  }
  if (item.durationType === "seconds") {
    const counts = item.countIn + (item.tempo * item.duration) / 60;
    return { counts, time: getTime(counts, item.tempo) };
  }
  return { counts: 0, time: 0 };
}

function getTime(counts: number, tempo: number) {
  return (counts / tempo) * 60 * 1000;
}

export function getTotalTimeDisplay(totalTime: number): string {
  const totalTimeSeconds = totalTime / 1000;
  const minutes = Math.floor(totalTimeSeconds / 60);
  const seconds = Math.round(totalTimeSeconds - minutes * 60);
  const hours = Math.floor(totalTimeSeconds / 3600);
  const secondsDisplay = checkNumber(seconds);
  const minutesDisplay = checkNumber(minutes);
  const hoursDisplay = checkNumber(hours);

  return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}

function checkNumber(num: number) {
  if (num >= 10) {
    return String(num);
  }
  return `0${num}`;
}
