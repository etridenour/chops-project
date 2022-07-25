import { useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../../shared/constants";
import navbarStyles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = () => {
  const navItems = APP_ROUTES;
  
  const currentLocation = useLocation();

  return (
    <nav className={navbarStyles.nav}>
      {navItems.map((item, i) => (
        <NavbarItem
          label={item.label}
          url={item.url}
          activeUrl={currentLocation.pathname}
          key={i}
        />
      ))}
    </nav>
  );
};

export default Navbar;
