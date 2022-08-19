import { useEffect, useState } from "react";
import NewExerciseDialog from "../New/Dialog/NewExerciseDialog";
import Exercise from "./Exercise/Exercise";
import NewExerciseButton from "./Exercise/NewExerciseButton";
import exerciseListStyles from "./ExerciseList.module.scss";
import exerciseApi from "../../../core/api/exercise-api";
import { IExercise } from "../models/exercise";
import PageWrapper from "../../../shared/Layout/PageWrapper/PageWrapper";

const ExerciseList = () => {
  const [loadingExercises, setLoadingExercises] = useState<boolean>(false);
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [activeExerciseId, setActiveExerciseId] = useState<string>("");
  const [form, setForm] = useState<IExercise>({} as IExercise);
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
    setForm({} as IExercise);
    toggleDialog();
  };

  const handleEdit = (id: string) => {
    setEdit(true);
    const exercise: IExercise = exercises.find(
      (exercise) => exercise._id === id
    ) as IExercise;
    exercise._id && setActiveExerciseId(exercise._id);
    setForm(convertExerciseToForm(exercise));
    toggleDialog();
  };

  const convertExerciseToForm = (exercise: IExercise): IExercise => {
    return {
      _id: '',
      name: exercise.name,
      timeSignatureTopNumber: exercise.timeSignatureTopNumber,
      timeSignatureBottomNumber: exercise.timeSignatureBottomNumber,
      measureCount: exercise.measureCount,
      clickTracks: []
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
              editExercise={() => handleEdit(exercise._id)}
              deleteExercise={() => handleDelete(exercise._id)}
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
