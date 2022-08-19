import {
  AddCircleOutline,
  RemoveCircleOutline,
  TimerOutlined,
} from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  addClickTrackTotals,
  getTotalTimeDisplay,
} from "../../../shared/utils/get-click-track-totals";
import { IExercise } from "../../Exercises/models/exercise";
import { IClickTrack, IClickTrackItem } from "../models/click-track";
import styles from "./ClickTrackForm.module.scss";
import { EMPTY_CLICK_TRACK, EMPTY_CLICK_TRACK_ITEM } from "./empty-click-track";
import ClickTrackFormItem from "./Item/ClickTrackFormItem";

interface Props {
  exercises: IExercise[];
  exercisesIdMap: Record<string, IExercise>;
  clickTrack: IClickTrack;
  edit: boolean;
  valueChange: (form: IClickTrack) => void;
}

const ClickTrackForm = (props: Props) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    clickTrackItems: [],
    exerciseId: "",
  } as IClickTrack);
  const [forExercise, setForExercise] = useState<string>("no");

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    setting: string
  ) => {
    setForExercise(setting);
    if (setting === "no") {
      const updatedForm = { ...form, exerciseId: "" };
      setForm(updatedForm);
      props.valueChange(updatedForm);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const updatedForm = { ...form, exerciseId: event.target.value };
    setForm(updatedForm);
    props.valueChange(updatedForm);
  };

  useEffect(() => {
    if (props.edit) {
      setForExercise(props.clickTrack.exerciseId ? "yes" : "no");
      setForm(props.clickTrack);
      return;
    }
    const emptyClickTrack = EMPTY_CLICK_TRACK;
    addTotals(emptyClickTrack);
  }, [props.edit, props.clickTrack]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = { ...form, [event.target.name]: event.target.value };
    setForm(updatedForm);
    props.valueChange(updatedForm);
  };

  const handleAddClickTrackItem = () => {
    const updatedItems = [...(form.clickTrackItems || [])];
    updatedItems.push(EMPTY_CLICK_TRACK_ITEM);
    const updatedForm = {
      ...form,
      clickTrackItems: updatedItems,
    };
    addTotals(updatedForm);
  };

  const handleRemoveClickTrackItem = () => {
    const updatedItems = [...form.clickTrackItems];
    updatedItems.pop();
    const updatedForm = {
      ...form,
      clickTrackItems: updatedItems,
    };
    addTotals(updatedForm);
  };

  const handleItemValueChange = (value: IClickTrackItem, index: number) => {
    const updatedItems = [...form.clickTrackItems];
    updatedItems[index] = value;
    const updatedForm = {
      ...form,
      clickTrackItems: updatedItems,
    };
    addTotals(updatedForm);
  };

  const addTotals = (clickTrack: IClickTrack) => {
    const exerciseDto = clickTrack.exerciseId
      ? props.exercisesIdMap[clickTrack.exerciseId]
      : null;
    const newClickTrack = addClickTrackTotals(clickTrack, exerciseDto);
    setForm(newClickTrack);
    props.valueChange(newClickTrack);
  };

  return (
    <form className={styles.form}>
      <div className={styles["flex-item"]}>
        <TextField
          autoFocus
          label="Name"
          variant="standard"
          className={styles["input"]}
          value={form.name ?? ""}
          name="name"
          onChange={handleInputChange}
        />
        <div className={styles["category-input"]}>
          <TextField
            label="Category"
            variant="standard"
            className={styles["input"]}
            value={form.category ?? ""}
            name="category"
            onChange={handleInputChange}
          />
        </div>
        {/* <span className={styles.time}>{form.totalTime}</span> */}
      </div>
      <div className={styles["time-container"]}>
        <TimerOutlined className={styles["timer-icon"]} />
        <span className={styles["total-time"]}>
          {form.totalTime || ""}
        </span>
      </div>
      <div className={styles["flex-item"]}>
        <div className={styles["toggle-group-container"]}>
          <span className={styles["for-exercise-title"]}>For Exercise?</span>
          <ToggleButtonGroup
            color="primary"
            value={forExercise}
            exclusive
            onChange={handleToggleChange}
          >
            <ToggleButton value="yes">Yes</ToggleButton>
            <ToggleButton value="no">No</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {forExercise === "yes" && (
          <FormControl variant="standard">
            <InputLabel id="select-label">Exercise</InputLabel>
            <Select
              labelId="select-label"
              value={form.exerciseId ?? ""}
              name="exericseId"
              onChange={handleSelectChange}
              label="Exercise"
              className={styles["input"]}
            >
              {props.exercises &&
                props.exercises.map((e, i) => {
                  return (
                    <MenuItem key={i} value={e._id}>
                      <em>{e.name}</em>
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        )}
      </div>
      <div>
        {form.clickTrackItems?.map((item, i) => {
          return (
            <div key={i} className={styles["form-item"]}>
              <ClickTrackFormItem
                clickTrackItem={item}
                index={i}
                forExercise={forExercise}
                clickTrackCount={form.clickTrackItems?.length || 0}
                valueChange={(value) => handleItemValueChange(value, i)}
              />
            </div>
          );
        })}
        {form.clickTrackItems?.length > 1 && (
          <IconButton
            onClick={handleRemoveClickTrackItem}
            aria-label="remove"
            size="large"
          >
            <RemoveCircleOutline />
          </IconButton>
        )}
        <IconButton
          onClick={handleAddClickTrackItem}
          aria-label="add"
          size="large"
        >
          <AddCircleOutline />
        </IconButton>
      </div>
    </form>
  );
};

export default ClickTrackForm;
