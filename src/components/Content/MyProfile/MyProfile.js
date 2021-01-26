import { Avatar, Card, CircularProgress, Container, Divider, Grid, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { followingInfo, getFollowingInfo, isFetching } from '../../../features/subscription/subscriptionSlice'
import { setCurrentUser } from '../../../features/users/usersSlice'
import { useStyles } from './styles'
import useAuthRedirect from '../../../hooks/useAuthRedirect'
import ProfileInfo from '../Profile/ProfileInfo'
import { myProfileInfo } from '../../../features/myProfile/myProfileSlice'


const MyProfile = ({ followingIDs }) => {
    const user = useSelector(myProfileInfo)
    const [profileInfo, setProfileInfo] = useState({ ...user })
    const dispatch = useDispatch()
    const followingsFetchInProgress = useSelector(isFetching)
    const followingUsers = useSelector(followingInfo)
    const classes = useStyles()
    console.count('MYPROFILE')
    const setCurrentUserToNull = () => {
        dispatch(setCurrentUser(""));
    };

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


    useEffect(() => {
        dispatch(getFollowingInfo(followingIDs))
    }, [dispatch, followingIDs.length]) //TODO annoying


    if (useAuthRedirect()) {
        return <Redirect to='/login' />
    }


    const handleChange = (e) => {
        if (e.target) {
            setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value })
        } else {
            setProfileInfo({ ...profileInfo, birthday: e })
        }
        console.log(profileInfo)
    }

    return (
        <Container>
            <Grid container>
                <Grid item direction='row' container>
                    <Grid item >
                        <Card className={classes.myProfile}>
                            <Avatar className={classes.avatar} variant='rounded' src={user.ava_small}>
                                {`${user.name ? user.name[0] : ''}${user.surname ? user.surname[0] : ''}`}
                            </Avatar>
                        </Card>
                    </Grid>
                    <Grid item>
                        <ProfileInfo editHandler={handleChange} profile={profileInfo} />
                    </Grid>

                </Grid>
                {/* Followings Module */}
                <Grid item>
                    <Card className={classes.followings_module}>
                        <Typography className={classes.followings_module_title} variant='body2'>Following:</Typography>
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
                </Grid>

            </Grid>

        </Container>
    )
}

export default MyProfile