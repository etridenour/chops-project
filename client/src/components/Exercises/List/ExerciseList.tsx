import { useEffect, useState } from "react";
import NewExerciseDialog from "../New/Dialog/NewExerciseDialog";
import Exercise from "./Exercise/Exercise";
import NewExerciseButton from "./Exercise/NewExerciseButton";
import exerciseListStyles from "./ExerciseList.module.scss";
import exerciseApi from "../../../core/api/exercise-api";
import { IExercise } from "../../../core/models/exercise";
import { IExerciseForm } from "../../../core/models/new-exercise-form";
import PageWrapper from "../../Layout/PageWrapper/PageWrapper";

const ExerciseList = () => {
  const [loadingExercises, setLoadingExercises] = useState<boolean>(false);
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [activeExerciseId, setActiveExerciseId] = useState<string>("");
  const [form, setForm] = useState<IExerciseForm>({} as IExerciseForm);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

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

  const handleNew = () => {
    setEdit(false);
    setForm({} as IExerciseForm);
    toggleDialog();
  };

  const handleEdit = (id: string) => {
    setEdit(true);
    const exercise: IExercise = exercises.find(
      (exercise) => exercise.id === id
    ) as IExercise;
    setActiveExerciseId(exercise.id);
    setForm(convertExerciseToForm(exercise));
    toggleDialog();
  };

  const convertExerciseToForm = (exercise: IExercise): IExerciseForm => {
    return {
      name: exercise.name,
      timeSignatureTopNumber: exercise.timeSignatureTopNumber,
      timeSignatureBottomNumber: exercise.timeSignatureBottomNumber,
      measureCount: exercise.measureCount,
    };
  };

  const handleDelete = (id: string) => {
    exerciseApi.deleteExercise(id).then((result) => {
      getAllExercises();
    });
  };

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PageWrapper>
      <div className={exerciseListStyles["exercise-list-container"]}>
        <NewExerciseButton onClick={handleNew} />

        {exercises &&
          exercises.map((exercise, i) => (
            <Exercise
              key={i}
              exercise={exercise}
              editExercise={() => handleEdit(exercise.id)}
              deleteExercise={() => handleDelete(exercise.id)}
            />
          ))}

        <NewExerciseDialog
          isOpen={isOpen}
          form={form}
          edit={edit}
          id={activeExerciseId}
          handleClose={() => toggleDialog()}
          getAllExercises={() => getAllExercises()}
        />
      </div>
    </PageWrapper>
  );
};

export default ExerciseList;
