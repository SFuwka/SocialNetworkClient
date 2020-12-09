import { Box, Card, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, currentUser } from '../../../features/users/usersSlice'

const Profile = (props) => {
    const userId = props.match.params.userId
    const dispatch = useDispatch()
    let profile = useSelector(currentUser)
    console.log(profile, 'CURRENT')
    useEffect(() => {
        console.count('profile Use effect')
        dispatch(getUser(userId))
    }, [dispatch, userId])

  

    return <Grid container>
        <Grid item>
            <Card>
                <Typography>{profile.name}</Typography>
                <Typography>{profile.surname}</Typography>
            </Card>
        </Grid>
    </Grid>
}

export default Profile