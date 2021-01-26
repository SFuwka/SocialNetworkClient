import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  darkMode,
  toggleDarkMode,
} from "../../../features/navigation/navigationSlice";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(darkMode);
  const classes = useStyles();
  const toggleTheme = (e) => {
    e.preventDefault();
    dispatch(toggleDarkMode());
  };
  

  return (
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography className={classes.title}>Social Network 1.1</Typography>
          <IconButton onClick={toggleTheme}>
            {darkTheme ? <Brightness4OutlinedIcon /> : <Brightness7Icon />}
          </IconButton>
          <NavLink className={classes.loginButton} to="/login">
            <AuthButton />
          </NavLink>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
