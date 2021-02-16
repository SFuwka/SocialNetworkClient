import { Avatar, Card, CircularProgress, Divider, Grid, Paper, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isAuthorized } from '../../../../features/auth/authSlice'
import { followingInfo, getFollowingInfo, isFetching, setFollowingByIdList } from '../../../../features/subscription/subscriptionSlice'
import { setCurrentUser } from '../../../../features/users/usersSlice'
import SubscribeButton from '../../../Common/SubscribeButton'
import { useStyles } from '../styles'

const ProfileFollowingsModule = ({ userId, followingIDs, authUser }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const followingsFetchInProgress = useSelector(isFetching)
    const followingUsers = useSelector(followingInfo)
    const isAuth = useSelector(isAuthorized)
    useEffect(() => {
        dispatch(getFollowingInfo(followingIDs))
    }, [dispatch, followingIDs])

    const setCurrentUserToNull = () => {
        dispatch(setCurrentUser(""));
        setCurrentUserFollowingsToNull()
    }

    // TODO kludge
    const setCurrentUserFollowingsToNull = () => {
        dispatch(setFollowingByIdList([]))
    }

    const getRandomListofFollowing = (list) => {
        let listLength = list.length
        let listCopy = [...list]
        if (list.length <= 6) {
            return list
        }
        let res = []

        for (let i = 0; i < 6; i++, listLength--) {
            let user = listCopy.splice(Math.floor(Math.random() * listLength), 1)
            res.push(user[0])
        }
        return res
    }

    return (
        <Card>
            {isAuth && (authUser ? authUser._id !== userId : true) && <SubscribeButton userId={userId} />}
            <Typography variant='body2'>Following:</Typography>
            <Divider variant='middle' />
            {followingsFetchInProgress ? <CircularProgress /> :
                <Grid justify='center' container>
                    {getRandomListofFollowing(followingUsers).map(user => <Paper key={user._id} elevation={0} className={classes.followingUser}>
                        <NavLink onClick={setCurrentUserToNull} to={`/profile/${user._id}`}>
                            <Avatar className={classes.smallAvatar} src={user.ava_small}>{user.name[0]}</Avatar>
                        </NavLink>
                        {user.name}</Paper>)}
                </Grid>}
        </Card>
    )
}

export default ProfileFollowingsModule