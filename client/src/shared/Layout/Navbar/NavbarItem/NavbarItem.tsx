import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import navbarItemStyles from "./NavbarItem.module.scss";

interface NavbarItemProps {
  label: string;
  url: string;
  activeUrl: string;
}

const NavbarItem = (props: NavbarItemProps) => {
  return (
    <Typography>
      <Link
        className={`${navbarItemStyles.link} ${
          props.activeUrl.startsWith(props.url) ? navbarItemStyles.active : null
        }`}
        to={props.url}
      >
        {props.label}
      </Link>
    </Typography>
  );
};

export default NavbarItem;
