import exerciseStyles from "./Exercise.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { Paper } from "@mui/material";

const NewExerciseButton = (props: { onClick: () => void }) => {
  return (
    <Paper
      elevation={6}
      onClick={props.onClick}
      className={`${exerciseStyles["create-new"]} ${exerciseStyles.exercise}`}
    >
      <span>Create New</span>
      <AddIcon className={exerciseStyles.icon}></AddIcon>
    </Paper>
  );
};

export default NewExerciseButton;
