import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { IClickTrack } from "../../ClickTrackBuilder/models/click-track";
import { IExercise } from "../../Exercises/models/exercise";
import SessionPageItem from "./Item/SessionPageItem";

interface Props {
  activeSessionItems: IExercise[];
}

const SessionPage = (props: Props) => {
  const [clickTrackMap, setClickTrackMap] = useState<
    Record<string, { playing: boolean; progress: number }>
  >({});

  useEffect(() => {
    const obj = {};
    props.activeSessionItems.forEach(c => {
      // obj[c.i]
    })
  }, props.activeSessionItems)

  const handleAddActiveClickTrackIndex = (i: number) => {
    console.log(i)
  }

  return (
    <div>
      {props.activeSessionItems.map((c, i) => {
        return (
          <div></div>
          // <SessionPageItem
          //   key={i}
          //   clickTrack={c}
          //   addActiveClickTrackIndex={() => handleAddActiveClickTrackIndex(i)}
          // />
        );
      })}
    </div>
  );
};

export default SessionPage;
