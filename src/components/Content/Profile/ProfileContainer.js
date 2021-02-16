import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, currentUser, isFetching } from '../../../features/users/usersSlice'
import ProfilePreloader from './profile_common/ProfilePreloader'
import { compose } from '@reduxjs/toolkit';
import { Redirect, withRouter } from 'react-router-dom';
import { myProfileInfo } from '../../../features/myProfile/myProfileSlice';
import Profile from './profile_common/Profile';
import useAuthRedirect from '../../../hooks/useAuthRedirect'
import { followingById, getListFollowingsById } from '../../../features/subscription/subscriptionSlice';



const ProfileContainer = ({ match, followingIDs }) => {
    const dispatch = useDispatch()
    const userId = match.params.userId
    const selectedUser = useSelector(currentUser)
    const authUser = useSelector(myProfileInfo)
    const pending = useSelector(isFetching)
    const listOfUserFollowing = useSelector(followingById)
    console.log(selectedUser)

    useEffect(() => {
        if (userId) {
            dispatch(getUser(userId))
            dispatch(getListFollowingsById(userId))
        }
    }, [dispatch, userId])


    if (useAuthRedirect(userId)) {
        return <Redirect to='/login' />
    }


    return <>
        {pending && <ProfilePreloader />}
        {!pending && (
            (userId && <Profile userId={userId} followingIDs={listOfUserFollowing} profile={selectedUser} authUser={authUser} />)
            || (!userId && <Profile followingIDs={followingIDs} editable={true} profile={authUser} />)
        )
        }
    </>
}

export default compose(withRouter)(ProfileContainer)