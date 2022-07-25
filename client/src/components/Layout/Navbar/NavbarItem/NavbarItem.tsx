import { Link } from "react-router-dom";
import navbarItemStyles from "./NavbarItem.module.scss";

interface NavbarItemProps {
  label: string;
  url: string;
  activeUrl: string;
}

const NavbarItem = (props: NavbarItemProps) => {
  return (
    <div>
      <Link
        className={`${navbarItemStyles.link} ${
          props.url === props.activeUrl ? navbarItemStyles.active : null
        }`}
        to={props.url}
      >
        {props.label}
      </Link>
    </div>
  );
};

export default NavbarItem;
