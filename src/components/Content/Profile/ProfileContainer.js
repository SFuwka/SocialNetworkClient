import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, currentUser, isFetching, pending } from '../../../features/users/usersSlice'
import { useStyles } from "./styles";
import ProfilePreloader from './ProfilePreloader'
import Profile from './Profile';
import { compose } from '@reduxjs/toolkit';
import { withRouter } from 'react-router-dom';



const ProfileContainer = (props) => {
    console.count('ProfileContainer')
    const classes = useStyles()
    const userId = props.match.params.userId
    const dispatch = useDispatch()
    let profile = useSelector(currentUser)
    const process = useSelector(isFetching)
    useEffect(() => {
        if (!profile.name && !process) {
            console.count('DISPATCH USER')
            dispatch(getUser(userId))
        }
    }, [dispatch, userId])


    return <>
        { process ? <ProfilePreloader /> : <Profile userId={userId} profile={profile} classes={classes} />}
    </>
}

export default compose(withRouter)(ProfileContainer)