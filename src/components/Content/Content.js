import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import AllUsers from './AllUsers/AllUsers'
import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'
import Login from './Auth/Login/LoginCopy'
import SignUp from './Auth/SignUp/SignUpCopy'
import { useDispatch, useSelector } from 'react-redux'
import { authMe, isAuthorized, isFetching, loginOrSignUpProgress } from '../../features/auth/authSlice'
import { CircularProgress } from '@material-ui/core'
import { getListOfFollowing, following } from '../../features/subscription/subscriptionSlice'
import ProfileContainer from './Profile/ProfileContainer'


const Content = () => {
    const dispatch = useDispatch()
    console.count('CONTENT')
    const isAuth = useSelector(isAuthorized)
    useEffect(() => {
        console.count('CONTENTUSEEFFECT')
        if (!isAuth) {
            dispatch(authMe())
        } else{
            dispatch(getListOfFollowing())
        }
    }, [dispatch, isAuth])

    const followingIDs = useSelector(following)
    const pending = useSelector(isFetching)
    const loginOrSignUpPending = useSelector(loginOrSignUpProgress)



    if (pending && !loginOrSignUpPending) {
        return <CircularProgress />
    }

    return <>
        <Route path='/findusers' render={() => <AllUsers followingIDs={followingIDs} />} />
        <Route path='/dialogs' render={() => <Dialogs />} />
        <Route path='/friends' render={() => <Friends />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/' render={() => <ProfileContainer followingIDs={followingIDs} />} />
    </>
}

export default Content