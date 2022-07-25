import wrapperStyles from "./PageWrapper.module.scss";

type Props = {
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return <section className={wrapperStyles.section}>{children}</section>;
};

export default PageWrapper;
