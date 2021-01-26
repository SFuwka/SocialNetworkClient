import { Avatar, Card, CardHeader, CircularProgress, Container, Grid } from '@material-ui/core'
import React from 'react'
import ProfileInfo from './ProfileInfo';

import { useStyles } from "./styles";

const ProfilePreloader = () => {
    const classes = useStyles()
    const profile = ''
    return <Container>
        <Grid container>
            <Grid item >
                <Card className={classes.card}>
                    <Avatar className={classes.avatar} variant='rounded'>
                        <CircularProgress />
                    </Avatar>
                </Card>
            </Grid>
            <ProfileInfo profile={profile} />
        </Grid>
    </Container>
}

export default ProfilePreloader