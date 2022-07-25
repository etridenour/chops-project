import { useState } from "react";
import { IExercise } from "../../core/models/exercise";
import PageWrapperSidebar from "../Layout/PageWrapperSidebar/PageWrapperSidebar";
import clickStyles from "./ClickTrackBuilder.module.scss";
import ClickTrackBuilderMain from "./ClickTrackBuilderMain/ClickTrackBuilderMain";
import ClickTrackBuilderSidebar from "./ClickTrackBuilderSidebar/ClickTrackBuilderSidebar";

const ClickTrackBuilder = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  
  const handleAddExercise = (exercise: IExercise) => {
    setExercises([...exercises, exercise]);
  }

  return (
    <PageWrapperSidebar
      main={<ClickTrackBuilderMain exercises={exercises} />}
      sidebar={<ClickTrackBuilderSidebar addExercise={handleAddExercise} />}
    />
  );
};

export default ClickTrackBuilder;
