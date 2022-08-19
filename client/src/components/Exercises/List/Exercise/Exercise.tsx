import { IExercise } from "../../models/exercise";
import exerciseStyles from "./Exercise.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Paper } from "@mui/material";

interface IExerciseProps {
  exercise: IExercise;
  editExercise: () => void;
  deleteExercise: () => void;
}

const Exercise = (props: IExerciseProps) => {
  return (
    <Paper elevation={6} className={exerciseStyles.exercise}>
      <span className={exerciseStyles.title}>{props.exercise.name}</span>
      <div className={exerciseStyles["info-container"]}>
        <div className={exerciseStyles["time-signature"]}>
          <span>{props.exercise.timeSignatureTopNumber}</span>
          <span>{props.exercise.timeSignatureBottomNumber}</span>
        </div>
        <div className={exerciseStyles['measure-count']}>
          <span>{props.exercise.measureCount}</span>
          <span className={exerciseStyles['info-container-title']}>measures</span>
        </div>
      </div>
      <div className={exerciseStyles["button-container"]}>
        <IconButton aria-label="delete" onClick={props.editExercise}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={props.deleteExercise}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default Exercise;
