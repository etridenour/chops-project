import LayoutHeader from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import layoutStyles from './Layout.module.scss';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className={layoutStyles.main}>
      <LayoutHeader />
      <div className={layoutStyles["center-container"]}>
        <Navbar />
        <section className={layoutStyles.section}>{children}</section>
      </div>
    </main>
  );
};

export default Layout;
