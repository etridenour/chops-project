import { useEffect, useState } from "react";
import exerciseApi from "../../core/api/exercise-api";
import PageWrapperSidebar from "../../shared/Layout/PageWrapperSidebar/PageWrapperSidebar";
import { IClickTrack } from "../ClickTrackBuilder/models/click-track";
import { IExercise } from "../Exercises/models/exercise";
import SessionPage from "./Page/SessionPage";
import SessionSidebar from "./Sidebar/SessionSidebar";

const Session = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [activeSessionItems, setActiveSessionItems] = useState<IExercise[]>([]);

  useEffect(() => {
    getAllExercises();
  }, []);

  const getAllExercises = () => {
    exerciseApi
      .getAllExercises()
      .then((exercises) => {
        setExercises(exercises);
      })
      .catch((err) => console.log(err));
  };

  const handleAddActiveSessionItems = (clickTrack: IClickTrack, exercise: IExercise) => {
    // setActiveClickTracks([...activeClickTracks, clickTrack]);
  };

  return (
    <PageWrapperSidebar
      main={
        <SessionPage
          // exercises={exercises}
          activeSessionItems={activeSessionItems}
        />
      }
      sidebar={
        <SessionSidebar
          exercises={exercises}
          addActiveSessionItems={(clickTrack, exercise) => handleAddActiveSessionItems(clickTrack, exercise)}
        />
      }
    />
  );
};

export default Session;
