import {
  DeleteOutlineOutlined,
  EditOutlined,
  TimerOutlined,
} from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { IExercise } from "../../../Exercises/models/exercise";
import { IClickTrack } from "../../models/click-track";
import styles from "./ClickTrack.module.scss";
import ClickTrackItem from "./ClickTrackItem/ClickTrackItem";

interface Props {
  clickTrack: IClickTrack;
  exercisesIdMap: Record<string, IExercise>;
  handleEdit: () => void;
  handleDelete: () => void;
}

const ClickTrack = (props: Props) => {
  return (
    <Paper elevation={6} className={styles["click-track-container"]}>
      <div className={styles["title-container"]}>
        <h2 className={styles.title}>{props.clickTrack.name || "Untitled"}</h2>
        <div className={styles["button-container"]}>
          <IconButton
            aria-label="delete"
            size="large"
            className={styles["back-button"]}
            onClick={() => props.handleEdit()}
          >
            <EditOutlined />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            className={styles["back-button"]}
            onClick={() => props.handleDelete()}
          >
            <DeleteOutlineOutlined />
          </IconButton>
        </div>
      </div>
      {props.clickTrack.exerciseId && (
        <h4 className={styles.h3}>{props.exercisesIdMap[props.clickTrack.exerciseId].name}</h4>
      )}
      <div className={styles["time-container"]}>
        <TimerOutlined className={styles["timer-icon"]} />
        <span className={styles["total-time"]}>
          {props.clickTrack.totalTime || ""}
        </span>
      </div>
      <div className={styles["items-container"]}>
        {props.clickTrack.clickTrackItems.map((item, i) => {
          return (
            <div key={i} className={styles.item}>
              <ClickTrackItem clickTrackItem={item} />
              {i < props.clickTrack.clickTrackItems.length - 1 && (
                <span className={styles.plus}>+</span>
              )}
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export default ClickTrack;
