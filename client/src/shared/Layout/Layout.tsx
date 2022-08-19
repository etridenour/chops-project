import LayoutHeader from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import layoutStyles from './Layout.module.scss';
import { Paper } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className={layoutStyles.main}>
      <LayoutHeader />
      <div className={layoutStyles["center-container"]}>
        <Navbar />
        <Paper className={layoutStyles.section}>{children}</Paper>
      </div>
    </main>
  );
};

export default Layout;
