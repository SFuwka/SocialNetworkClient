import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSideBar } from "../../../../features/navigation/navigationSlice";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const closeSidebar = () => dispatch(setSideBar(false));
  return (
    <List>
      <NavLink
        onClick={closeSidebar}
        activeClassName={styles.active}
        className={styles.navlink}
        exact to={"/"}
      >
        <ListItem divider button>
          <Typography color="textPrimary">Profile</Typography>
        </ListItem>
      </NavLink>
      <NavLink
        onClick={closeSidebar}
        activeClassName={styles.active}
        className={styles.navlink}
        to={"/dialogs"}
      >
        <ListItem divider button>
          <Typography color="textPrimary">Dialogs</Typography>
        </ListItem>
      </NavLink>
      <NavLink
        onClick={closeSidebar}
        activeClassName={styles.active}
        className={styles.navlink}
        to={"/friends"}
      >
        <ListItem divider button>
          <Typography color="textPrimary">Friends</Typography>
        </ListItem>
      </NavLink>
      <NavLink
        onClick={closeSidebar}
        activeClassName={styles.active}
        className={styles.navlink}
        to={"/findusers"}
      >
        <ListItem button>
          <Typography color="textPrimary">People</Typography>
        </ListItem>
      </NavLink>
    </List>
  );
};

export default Navbar;
