import React from 'react'
import { Avatar, Card, CardHeader, Container, Grid } from '@material-ui/core'
import SubscribeButton from '../../Common/SubscribeButton'
import { useSelector } from 'react-redux'
import { isAuthorized } from '../../../features/auth/authSlice'
import ProfileInfo from './ProfileInfo'

const Profile = ({ profile, classes, userId }) => {
    const isAuth = useSelector(isAuthorized)
    console.count('Profile')
    return (
        <Container>
            <Grid container>
                <Grid item >
                    <Card className={classes.card}>
                        <Avatar className={classes.avatar} variant='rounded' src={profile.ava_small}>
                            {`${profile.name ? profile.name[0] : ''}${profile.surname ? profile.surname[0] : ''}`}
                        </Avatar>
                        {isAuth && <SubscribeButton id={profile._id} />}
                    </Card>
                </Grid>
                <ProfileInfo profile={profile} />
            </Grid>

        </Container>
    )
}


export default Profile