import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import navbarStyles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = () => {
  const navItems = APP_ROUTES;

  const currentLocation = useLocation();

  return (
    <Paper elevation={2} className={navbarStyles.paper}>
      <nav>
        {navItems.map((item, i) => (
          <NavbarItem
            label={item.label}
            url={item.url}
            activeUrl={currentLocation.pathname}
            key={i}
          />
        ))}
      </nav>
    </Paper>
  );
};

export default Navbar;
