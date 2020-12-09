import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import AllUsers from './AllUsers/AllUsers'
import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'
import Profile from './Profile/Profile'


const Content = () => {
    return <>
        <Route path='/findusers' component={AllUsers} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/friends' component={Friends} />
        <Route path='/profile/:userId?' component={withRouter(Profile)} />
    </>
}

export default Content