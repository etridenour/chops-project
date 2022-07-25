import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { IExerciseForm } from "../../../../core/models/new-exercise-form";
import formStyles from "./NewExerciseForm.module.scss";

interface NewExerciseFormProps {
  form: IExerciseForm;
  valueChange: (form: IExerciseForm) => void;
}

const NewExerciseForm = (props: NewExerciseFormProps) => {
  const [form, setForm] = useState({
    name: "",
    timeSignatureTopNumber: 0,
    timeSignatureBottomNumber: 0,
    measureCount: 0,
  } as IExerciseForm);

  useEffect(() => {
    setForm({...props.form});
  }, [props.form]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = { ...form, [event.target.name]: event.target.value };
    setForm(updatedForm);
    props.valueChange(updatedForm);
  };

  return (
    <form className={formStyles.form}>
      <TextField
        autoFocus
        margin="dense"
        name="name"
        label="Name of exercise"
        type="text"
        fullWidth
        variant="standard"
        value={form.name ?? ""}
        onChange={handleChange}
      />
      <div className={formStyles["time-signature-container"]}>
        <span className={formStyles["time-signature-title"]}>
          Time signature
        </span>
        <div>
          <TextField
            className={formStyles["time-signature-input"]}
            margin="dense"
            name="timeSignatureTopNumber"
            type="number"
            variant="standard"
            value={form.timeSignatureTopNumber ?? ""}
            onChange={handleChange}
          />
          <span className={formStyles.slash}>/</span>
          <TextField
            className={formStyles["time-signature-input"]}
            margin="dense"
            name="timeSignatureBottomNumber"
            type="number"
            variant="standard"
            value={form.timeSignatureBottomNumber ?? ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <TextField
        margin="dense"
        name="measureCount"
        label="Number of measures"
        type="text"
        fullWidth
        variant="standard"
        value={form.measureCount ?? ""}
        onChange={handleChange}
      />
    </form>
  );
};

export default NewExerciseForm;
