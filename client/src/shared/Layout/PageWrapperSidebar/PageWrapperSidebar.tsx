import { Paper } from '@mui/material';
import wrapperStyles from './PageWrapperSidebar.module.scss';

type Props = {
  main?: React.ReactNode;
  sidebar?: React.ReactNode;
};

const PageWrapperSidebar = (props: Props) => {
  return (
    <section className={wrapperStyles.container}>
      <Paper elevation={2} className={`${wrapperStyles.main} ${wrapperStyles.section}`}>{props.main}</Paper>
      <Paper elevation={2} className={`${wrapperStyles.sidebar} ${wrapperStyles.section}`}>{props.sidebar}</Paper>
    </section>
  );
};

export default PageWrapperSidebar;
