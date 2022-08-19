import { useEffect, useState } from "react";
import clickTrackApi from "../../../core/api/click-track-api";
import Empty from "../../../shared/Components/Empty/Empty";
import { IExercise } from "../../Exercises/models/exercise";
import ClickTrackDialog from "../Dialog/ClickTrackDialog";
import { IClickTrack } from "../models/click-track";
import ClickTrack from "./ClickTrack/ClickTrack";
import ClickTrackListToolbar from "./Toolbar/ClickTrackListToolbar";
import styles from "./ClickTrackList.module.scss";

interface Props {
  loading: boolean;
  clickTracks: IClickTrack[];
  exercises: IExercise[];
  exercisesIdMap: Record<string, IExercise>;
  getAllClickTracks: () => void;
}

const ClickTrackList = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [activeClickTrack, setActiveClickTrack] = useState<IClickTrack>(
    {} as IClickTrack
  );

  const handleNew = () => {
    setEdit(false);
    toggleDialog();
  };

  const handleEdit = (index: number) => {
    setEdit(true);
    setActiveClickTrack(props.clickTracks[index]);
    toggleDialog();
  };

  const handleDelete = (id: string) => {
    clickTrackApi
      .deleteClickTrack(id)
      .then((response) => {
        props.getAllClickTracks();
      })
      .catch((err) => console.log(err));
  };

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {props.loading && <span>Loading...</span>}
      {!props.loading && (
        <>
          <ClickTrackListToolbar handleNew={handleNew} />
          <div className={styles["list-container"]}>
            {props.clickTracks.map((c, i) => {
              return (
                <ClickTrack
                  key={i}
                  clickTrack={c}
                  exercisesIdMap={props.exercisesIdMap}
                  handleEdit={() => handleEdit(i)}
                  handleDelete={() => handleDelete(c._id || "")}
                />
              );
            })}
          </div>
          {!props.clickTracks?.length && <Empty text={"No click tracks"} />}
        </>
      )}
      <ClickTrackDialog
        isOpen={isOpen}
        exercises={props.exercises}
        exercisesIdMap={props.exercisesIdMap}
        clickTrack={activeClickTrack}
        edit={edit}
        handleClose={() => toggleDialog()}
        getAllClickTracks={() => props.getAllClickTracks()}
        // getAllExercises={() => getAllExercises()}
      />
    </div>
  );
};

export default ClickTrackList;
