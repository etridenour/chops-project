import { PlayCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Metronome } from "../../../../shared/utils/metronome";
import { IClickTrack } from "../../../ClickTrackBuilder/models/click-track";
import styles from "./SessionPageItem.module.scss";

interface Props {
  clickTrack: IClickTrack;
  addActiveClickTrackIndex: () => void;
}

const SessionPageItem = (props: Props) => {
  const metronome = new Metronome();

  const handleStart = () => {
    console.log("start");
    // const currentProgress =
    metronome.tempo = 180;
    metronome.start();
  };
  const handleStop = () => {
    console.log("stop");
    metronome.stop();
  };

  return (
    <div className={styles["item-container"]}>
      <h2 className={styles.title}>{props.clickTrack.name}</h2>
      <IconButton
        aria-label="play"
        size="large"
        className={styles["play-button"]}
        onClick={props.addActiveClickTrackIndex}
      >
        <PlayCircleOutline />
      </IconButton>
    </div>
  );
};

export default SessionPageItem;
