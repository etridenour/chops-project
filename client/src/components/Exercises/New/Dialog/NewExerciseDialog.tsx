import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import exerciseApi from "../../../../core/api/exercise-api";
import { IExercise } from "../../../../core/models/exercise";
import { IExerciseForm } from "../../../../core/models/new-exercise-form";
import NewExerciseForm from "../Form/NewExerciseForm";

interface NewExerciseDialogProps {
  isOpen: boolean;
  form: IExerciseForm | IExercise;
  edit: boolean;
  id: string;
  handleClose: () => void;
  getAllExercises: () => void;
}

export default function NewExerciseDialog(props: NewExerciseDialogProps) {
  const [form, setForm] = React.useState<IExerciseForm>({} as IExerciseForm);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setForm(props.form);
  }, [props.form])

  const handleValueChange = (form: IExerciseForm) => {
    setForm(form);
  };

  const handleSave = () => {
    setLoading(true);
    if (props.edit) {
      editExercise();
      return;
    }
    createNewExercise();
  };

  const createNewExercise = () => {
    exerciseApi.createNewExercise(form)
    .then((response) => {
      setLoading(false);
      props.handleClose();
      props.getAllExercises();
      setForm({} as IExerciseForm);
    })
    .catch((err) => console.log(err));
  }

  const editExercise = () => {
    exerciseApi.editExercise(props.id, form)
    .then((response) => {
      setLoading(false);
      props.handleClose();
      props.getAllExercises();
      setForm({} as IExerciseForm);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <Dialog open={props.isOpen} onClose={props.handleClose}>
        <DialogTitle>
          {(props.edit && `Edit ${form.name}`) || 'Create New Exericise'}
        </DialogTitle>
        <DialogContent>
          <NewExerciseForm
            form={form} valueChange={(form: IExerciseForm) => handleValueChange(form)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
