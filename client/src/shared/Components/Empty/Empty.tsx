import { InfoOutlined } from "@mui/icons-material";
import { ReactNode } from "react";
import styles from "./Empty.module.scss";

interface Props {
  text: string;
  icon?: ReactNode;
}

const Empty = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.icon || <InfoOutlined sx={{ fontSize: 48 }} />}
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};

export default Empty;
