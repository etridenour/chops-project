import { Paper } from "@mui/material";
import { IClickTrackItem } from "../../../models/click-track";
import styles from "./ClickTrackItem.module.scss";

interface Props {
  clickTrackItem: IClickTrackItem;
}

const ClickTrackItem = (props: Props) => {
  return (
    <div className={styles["items-container"]}>
      <Paper elevation={10} className={`${styles["start"]} ${styles.item}`}>
        <span>{props.clickTrackItem.countIn}&nbsp;</span>
        <span>{props.clickTrackItem.countInType}</span>
      </Paper>
      <Paper elevation={10} className={`${styles["middle"]} ${styles.item}`}>
        <span>{props.clickTrackItem.duration}&nbsp;</span>
        <span className={styles.text}>{props.clickTrackItem.durationType}</span>
        {props.clickTrackItem.durationType === "measures" && (
          <>
            <span>&nbsp;of&nbsp;</span>
            <span>{props.clickTrackItem.timeSignatureTopNumber}</span>
            <span>/</span>
            <span>{props.clickTrackItem.timeSignatureTopNumber}</span>
          </>
        )}
      </Paper>
      <Paper
        elevation={10}
        className={`${
          props.clickTrackItem.durationType === "reps"
            ? styles["middle"]
            : styles["end"]
        } ${styles.item}`}
      >
        <span className={styles["item-text"]}>
          {props.clickTrackItem.tempo}
        </span>
        <span className={styles.text}>bpm</span>
      </Paper>
      {props.clickTrackItem.durationType === "reps" && (
        <Paper elevation={10} className={`${styles["end"]} ${styles.item}`}>
          <span>{props.clickTrackItem.countsBetween}&nbsp;</span>
          <span>{props.clickTrackItem.countsBetweenType}</span>
        </Paper>
      )}
    </div>
  );
};

export default ClickTrackItem;
