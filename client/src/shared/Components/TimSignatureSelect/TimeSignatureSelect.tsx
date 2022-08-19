import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  getTimesignatureTopNumberOptions,
  TIME_SIGNATURE_BOTTOM_NUMBER,
} from "./time-signature-constants";
import styles from "./TimeSignatureSelect.module.scss";

interface Props {
  topNumber: number;
  bottomNumber: number;
  handleSelectChange: (event: SelectChangeEvent) => void;
}

const TimeSignatureSelect = (props: Props) => {
  const topNumberOptions: number[] = getTimesignatureTopNumberOptions();
  const bottomNumberOptions: number[] = TIME_SIGNATURE_BOTTOM_NUMBER;

  return (
    <div className={styles["select-container"]}>
      <FormControl variant="standard" className={styles["form-control"]}>
        <Select
          name="timeSignatureTopNumber"
          value={String(props.topNumber)}
          onChange={props.handleSelectChange}
        >
          {topNumberOptions.map((n, i) => {
            return (
              <MenuItem key={i} value={n}>
                {n}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div className={styles.slash}>/</div>
      <FormControl variant="standard" className={styles["form-control"]}>
        <Select
          name="timeSignatureBottomNumber"
          value={String(props.bottomNumber)}
          onChange={props.handleSelectChange}
        >
          {bottomNumberOptions.map((n, i) => {
            return (
              <MenuItem key={i} value={n}>
                {n}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default TimeSignatureSelect;
