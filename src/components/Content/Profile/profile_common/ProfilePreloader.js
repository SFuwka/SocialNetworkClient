import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ProfileInfo from './ProfileInfo';
import ProfileAvatar from './ProfileAvatar';
import { useStyles } from '../styles';

const ProfilePreloader = () => {
    const classes = useStyles()
    const profile = ''
    return <Container>
        <Grid container container className={classes.profile}>
            <Grid item >
                <ProfileAvatar preload={true} profile={profile} />
            </Grid>
            <ProfileInfo preload={true} profile={profile} />
        </Grid>
    </Container>
}

export default ProfilePreloader