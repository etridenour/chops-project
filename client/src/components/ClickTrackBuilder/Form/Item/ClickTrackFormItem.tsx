import {
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import TimeSignatureSelect from "../../../../shared/Components/TimSignatureSelect/TimeSignatureSelect";
import { IClickTrackItem } from "../../models/click-track";
import styles from "./ClickTrackFormItem.module.scss";

interface Props {
  clickTrackCount: number;
  index: number;
  clickTrackItem: IClickTrackItem;
  forExercise: string;
  valueChange: (form: IClickTrackItem) => void;
}

const ClickTrackFormItem = (props: Props) => {
  useEffect(() => {
    if (
      props.forExercise === "no" &&
      props.clickTrackItem.durationType === "reps"
    ) {
    }
  }, [props.forExercise, props.clickTrackItem]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = {
      ...props.clickTrackItem,
      [event.target.name]: String(event.target.value),
    };
    props.valueChange(updatedForm);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value =
      typeof event.target.value === "number"
        ? event.target.value
        : String(event.target.value);
    const updatedForm = {
      ...props.clickTrackItem,
      [event.target.name]: value,
    };
    props.valueChange(updatedForm);
  };

  return (
    <div className={styles["items-container"]}>
      <Paper className={`${styles["count-in"]} ${styles["item-container"]}`}>
        <span className={styles["item-title"]}>Count In</span>
        <TextField
          className={styles["number-input"]}
          value={props.clickTrackItem.countIn ?? 0}
          name="countIn"
          onChange={handleChange}
          variant="standard"
          type="number"
        />
        <FormControl variant="standard" className={styles["form-control"]}>
          <Select
            name="countInType"
            value={props.clickTrackItem.countInType || ""}
            onChange={handleSelectChange}
          >
            <MenuItem value={"counts"}>counts</MenuItem>
            <MenuItem value={"measures"}>measures</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper className={`${styles["duration"]} ${styles["item-container"]}`}>
        <span className={styles["item-title"]}>Duration</span>
        <TextField
          className={styles["number-input"]}
          value={props.clickTrackItem.duration ?? 0}
          name="duration"
          onChange={handleChange}
          variant="standard"
          type="number"
        />
        <FormControl variant="standard" className={styles["form-control"]}>
          <Select
            name="durationType"
            value={props.clickTrackItem.durationType ?? ""}
            onChange={handleSelectChange}
          >
            {props.forExercise === "yes" && (
              <MenuItem value={"reps"}>reps</MenuItem>
            )}
            <MenuItem value={"counts"}>counts</MenuItem>
            <MenuItem value={"measures"}>measures</MenuItem>
            <MenuItem value={"minutes"}>minutes</MenuItem>
            <MenuItem value={"seconds"}>seconds</MenuItem>
          </Select>
        </FormControl>
        {props.clickTrackItem.durationType === "measures" && (
          <>
            <Paper elevation={10} className={styles.of}>
              of
            </Paper>
            <TimeSignatureSelect
              topNumber={props.clickTrackItem.timeSignatureTopNumber}
              bottomNumber={props.clickTrackItem.timeSignatureBottomNumber}
              handleSelectChange={handleSelectChange}
            />
          </>
        )}
      </Paper>
      <Paper
        className={`${
          props.clickTrackItem.durationType === "reps" &&
          props.clickTrackItem.duration &&
          props.clickTrackItem.duration > 1
            ? styles["tempo-container-middle"]
            : styles["tempo-container-end"]
        } ${styles["item-container"]}`}
      >
        <span className={styles["item-title"]}>Tempo</span>
        <FormControl variant="standard" className={styles["tempo-select"]}>
          <Select
            name="tempoType"
            value={props.clickTrackItem.tempoType ?? ""}
            onChange={handleSelectChange}
          >
            <MenuItem value={"quarter"}>Quarter Note</MenuItem>
            <MenuItem value={"dottedQuarter"}>Dotted Quarter Note</MenuItem>
            <MenuItem value={"eighth"}>Eighth Note</MenuItem>
            <MenuItem value={"dottedEighth"}>Dotted Eighth Note</MenuItem>
            <MenuItem value={"sixteenth"}>Sixteenth Note</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.equals}>=</div>
        <TextField
          className={styles["number-input"]}
          value={props.clickTrackItem.tempo ?? 0}
          name="tempo"
          onChange={handleChange}
          variant="standard"
          type="number"
        />
        <span className={styles.bpm}>bpm</span>
      </Paper>
      {props.clickTrackItem.durationType === "reps" &&
        props.clickTrackItem.duration &&
        props.clickTrackItem.duration > 1 && (
          <Paper
            className={`${styles["counts-between"]} ${styles["item-container"]}`}
          >
            <span className={styles["item-title"]}>Counts Between</span>
            <TextField
              className={styles["number-input"]}
              value={props.clickTrackItem.countsBetween ?? 0}
              name="countsBetween"
              onChange={handleChange}
              variant="standard"
              type="number"
            />
            <FormControl variant="standard" className={styles["form-control"]}>
              <Select
                name="countsBetweenType"
                value={props.clickTrackItem.countsBetweenType || ""}
                onChange={handleSelectChange}
              >
                <MenuItem value={"counts"}>counts</MenuItem>
                <MenuItem value={"measures"}>measures</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        )}
      {props.clickTrackCount - 1 > props.index && (
        <span className={styles.plus}>+</span>
      )}
    </div>
  );
};

export default ClickTrackFormItem;
