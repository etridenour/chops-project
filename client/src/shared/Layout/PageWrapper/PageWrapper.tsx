import { Paper } from "@mui/material";
import wrapperStyles from "./PageWrapper.module.scss";

type Props = {
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <Paper elevation={2} className={wrapperStyles.section}>
      {children}
    </Paper>
  );
};

export default PageWrapper;
