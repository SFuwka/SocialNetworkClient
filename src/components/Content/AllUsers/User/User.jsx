import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";

const User = ({id, name, surname, country, city, birthday, ava_small }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <NavLink className={classes.avatar} to={`/profile/${id}`}>
            <Avatar src={ava_small} className={classes.avatar}>
              {name[0] + surname[0]}
            </Avatar>
          </NavLink>
        }
        title={`${name} ${surname}`}
        subheader="online" // later status here
      ></CardHeader>
    </Card>
  );
};

export default User;
