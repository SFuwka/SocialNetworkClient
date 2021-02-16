import { Avatar, Card, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useStyles } from "../styles";


const ProfileAvatar = ({ name, surname, ava_small, preload }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Avatar className={classes.avatar} variant='rounded' src={ava_small}>
                {!preload && `${name ? name[0] : ''}${surname ? surname[0] : ''}`}
                {preload && <CircularProgress />}
            </Avatar>
        </Card>
    )
}

export default ProfileAvatar