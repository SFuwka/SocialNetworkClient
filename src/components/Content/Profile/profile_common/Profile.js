import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import ProfileInfo from './ProfileInfo'
import { useStyles } from "../styles";
import ProfileAvatar from './ProfileAvatar'
import ProfileFollowingsModule from './ProfileFollowingsModule'
import PostModule from '../../Posts/PostModule';

const Profile = ({ userId, profile, editable, followingIDs, authUser }) => {
    const classes = useStyles()
    console.count('Profile')
    return (
        <Container>
            <div className={classes.profile}>
                <div className={classes.ava} >
                    <ProfileAvatar name={profile.name} surname={profile.surname} ava_small={profile.ava_small} />
                </div>
                <div className={classes.info}>
                    <ProfileInfo editable={editable} profile={profile} />
                </div>
                <div className={classes.followings_module}>
                    <ProfileFollowingsModule authUser={authUser} userId={userId} followingIDs={followingIDs} />
                </div>
                <div className={classes.post_module}>
                    <PostModule />
                </div>
            </div>

        </Container>
    )
}


export default Profile