import { TextField } from "@mui/material";
import styles from "./ClickTrackFormItemField.module.scss";

interface Props {
  value: number;
  name: string;
  title: string;
  lowerText?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClickTrackFormItemField = (props: Props) => {
  return (
    <div className={styles["title-item"]}>
      <span className={styles["title-item-text"]}>{props.title}</span>
      <TextField
        value={props.value.toString()}
        name={props.name}
        type="number"
        InputProps={{
          inputProps: {
            max: 300,
            min: 1,
          },
        }}
        size="small"
        className={styles["input"]}
        onChange={props.handleChange}
        variant="standard"
      />
    </div>
  );
};

export default ClickTrackFormItemField;
