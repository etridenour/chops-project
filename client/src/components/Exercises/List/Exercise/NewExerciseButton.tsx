import exerciseStyles from "./Exercise.module.scss";
import AddIcon from "@mui/icons-material/Add";

const NewExerciseButton = (props: { onClick: () => void }) => {
  return (
    <div
      onClick={props.onClick}
      className={`${exerciseStyles["create-new"]} ${exerciseStyles.exercise}`}
    >
      <span>Create New</span>
      <AddIcon className={exerciseStyles.icon}></AddIcon>
    </div>
  );
};

export default NewExerciseButton;
