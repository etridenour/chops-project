import wrapperStyles from './PageWrapperSidebar.module.scss';

type Props = {
  main?: React.ReactNode;
  sidebar?: React.ReactNode;
};

const PageWrapperSidebar = (props: Props) => {
  return (
    <section className={wrapperStyles.container}>
      <div className={`${wrapperStyles.main} ${wrapperStyles.section}`}>{props.main}</div>
      <aside className={`${wrapperStyles.sidebar} ${wrapperStyles.section}`}>{props.sidebar}</aside>
    </section>
  );
};

export default PageWrapperSidebar;
