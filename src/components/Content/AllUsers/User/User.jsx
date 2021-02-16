import {
  Avatar,
  CardHeader,
  Divider,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isAuthorized } from "../../../../features/auth/authSlice";
import { setCurrentUser } from "../../../../features/users/usersSlice";
import SubscribeButton from "../../../Common/SubscribeButton";
import { useStyles } from "./styles";
import InfoIcon from "@material-ui/icons/Info";

const User = ({
  _id,
  name,
  surname,
  ava_small,
  isFollowing,
  followingCount,
  subscribersCount,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthorized); //TODO send it as prop!?
  const setCurrentUserToNull = () => {
    dispatch(setCurrentUser(""));
  };

  return (
    <>
      <CardHeader
        avatar={
          <NavLink
            onClick={setCurrentUserToNull}
            className={classes.avatar}
            to={`/profile/${_id}`}
          >
            <Avatar src={ava_small} className={classes.avatar}>
              {name[0] + surname[0]}
            </Avatar>
          </NavLink>
        }
        action={
          isAuth && <SubscribeButton userId={_id} isFollowing={isFollowing} />
        }
        title={
          <Typography>
            {name} {surname}{" "}
            <Tooltip
              title={
                <>
                  <em>Following: {followingCount || 0}</em> <br />
                  <em>Subscribers: {subscribersCount || 0}</em>
                </>
              }
            >
              <InfoIcon style={{ margin: "auto" }} color="primary" />
            </Tooltip>
          </Typography>
        }
        subheader="online" // TO_DO status here
      />

      <Divider variant="middle" />
    </>
  );
};

export default User;
