import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../features/navigation/navigationSlice";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
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

          <Typography>asd</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
