import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import exerciseApi from "../../../core/api/exercise-api";
import { IExercise } from "../../../core/models/exercise";
import styles from "./ClickTrackBuilderSidebar.module.scss";

interface ClickTrackBuilderProps {
  addExercise: (exercise: IExercise) => void;
}

const ClickTrackBuilderSidebar = (props: ClickTrackBuilderProps) => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [loadingExercises, setLoadingExercises] = useState<boolean>(false);

  useEffect(() => {
    getAllExercises();
  }, []);

  const getAllExercises = () => {
    exerciseApi
      .getAllExercises()
      .then((exercises) => {
        setLoadingExercises(false);
        setExercises(exercises);
      })
      .catch((err) => console.log(err));
  };

  const handleAddExercise = (exercise: IExercise) => {
    props.addExercise(exercise);
  }

  return (
    <section>
      <span>Exercises</span>
      <div className={styles["exercise-container"]}>
        {exercises &&
          exercises.map((exercise, i) => (
            <Button className={styles["exercise-item"]} key={i} onClick={() => handleAddExercise(exercise)}>
              {exercise.name}
            </Button>
          ))}
      </div>
    </section>
  );
};

export default ClickTrackBuilderSidebar;
