import { Avatar, Grid, ListItemAvatar } from "@material-ui/core";
import React from "react";


const Friends = (props) => {
  return (
    <Grid container direction={"row"}>
      <Grid item>
        <ListItemAvatar>
            <Avatar></Avatar>
        </ListItemAvatar>
      </Grid>
    </Grid>
  );
};

export default Friends;
