import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { useState } from "react";
import clickTrackApi from "../../../core/api/click-track-api";
import { IExercise } from "../../Exercises/models/exercise";
import { IClickTrack } from "../models/click-track";
import ClickTrackForm from "../Form/ClickTrackForm";

interface Props {
  isOpen: boolean;
  exercises: IExercise[];
  exercisesIdMap: Record<string, IExercise>;
  clickTrack: IClickTrack;
  edit: boolean;
  handleClose: () => void;
  getAllClickTracks: () => void;
}

const ClickTrackDialog = (props: Props) => {
  const [form, setForm] = useState<IClickTrack>({} as IClickTrack);

  const handleSave = () => {
    if (props.edit) {
      editClickTrack();
      return;
    }
    createNewClickTrack();
  };

  const createNewClickTrack = () => {
    clickTrackApi
      .createNewClickTrack(form)
      .then((response) => {
        props.handleClose();
        props.getAllClickTracks();
        setForm({} as IClickTrack);
      })
      .catch((err) => console.log(err));
  };

  const editClickTrack = () => {
    clickTrackApi
      .editClickTrack(form)
      .then((response) => {
        props.handleClose();
        props.getAllClickTracks();
        setForm({} as IClickTrack);
      })
      .catch((err) => console.log(err));
  };

  const handleValueChange = (newForm: IClickTrack) => {
    setForm(newForm);
  };

  return (
    <Dialog open={props.isOpen} onClose={props.handleClose} maxWidth="lg">
      <DialogTitle>
        {(props.edit && "Edit Click Track") || "New Click Track"}
      </DialogTitle>
      <DialogContent>
        <ClickTrackForm
          exercises={props.exercises}
          exercisesIdMap={props.exercisesIdMap}
          clickTrack={props.clickTrack}
          edit={props.edit}
          valueChange={(form: IClickTrack) => handleValueChange(form)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClickTrackDialog;
