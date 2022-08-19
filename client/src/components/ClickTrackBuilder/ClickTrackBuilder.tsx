import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import clickTrackApi from "../../core/api/click-track-api";
import exerciseApi from "../../core/api/exercise-api";
import PageWrapper from "../../shared/Layout/PageWrapper/PageWrapper";
import { IExercise } from "../Exercises/models/exercise";
import ClickTrackList from "./List/ClickTrackList";
import { IClickTrack } from "./models/click-track";

const ClickTrackBuilder = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [clickTracks, setClickTracks] = useState<IClickTrack[]>([]);
  const [loadingExercises, setLoadingExercises] = useState<boolean>(true);
  const [loadingClickTracks, setLoadingClickTracks] = useState<boolean>(true);
  const [exercisesIdMap, setExercisesIdMap] = useState<Record<string, IExercise>>({});

  useEffect(() => {
    getAllExercises();
    getAllClickTracks();
  }, []);

  const getAllExercises = () => {
    exerciseApi
      .getAllExercises()
      .then((exercises) => {
        setLoadingExercises(false);
        setExercises(exercises);
        const map = exercises.reduce(
          (map: any, obj: IExercise) => ((map[obj._id] = obj), map),
          {}
        );
        setExercisesIdMap(map)
      })
      .catch((err) => console.log(err));
  };

  const getAllClickTracks = () => {
    clickTrackApi
      .getAllClickTracks()
      .then((clickTracks) => {
        setLoadingClickTracks(false);
        setClickTracks(clickTracks);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PageWrapper
        children={
          <Routes>
            <Route
              path="/"
              element={
                <ClickTrackList
                  loading={loadingExercises || loadingClickTracks}
                  clickTracks={clickTracks}
                  exercises={exercises}
                  exercisesIdMap={exercisesIdMap}
                  getAllClickTracks={getAllClickTracks}
                />
              }
            ></Route>
          </Routes>
        }
      />
    </>
  );
};

export default ClickTrackBuilder;
