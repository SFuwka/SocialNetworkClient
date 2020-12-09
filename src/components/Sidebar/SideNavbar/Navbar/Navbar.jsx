import { List, ListItem } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <List>
      <NavLink  activeClassName={styles.active} className={styles.navlink} to={"/profile"}>
        <ListItem divider button>
          Profile
        </ListItem>
      </NavLink>
      <NavLink  activeClassName={styles.active} className={styles.navlink} to={"/dialogs"}>
        <ListItem divider button>
          Dialogs
        </ListItem>
      </NavLink>
      <NavLink  activeClassName={styles.active} className={styles.navlink} to={"/friends"}>
        <ListItem divider button>
          Friends
        </ListItem>
      </NavLink>
      <NavLink  activeClassName={styles.active} className={styles.navlink} to={"/findusers"}>
        <ListItem divider button>
          People
        </ListItem>
      </NavLink>
    </List>
  );
};

export default Navbar;
