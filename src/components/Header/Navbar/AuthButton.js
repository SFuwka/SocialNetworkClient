import { Button, CircularProgress, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isAuthorized, isFetching, logout } from '../../../features/auth/authSlice';

const AuthButton = () => {
    const isAuth = useSelector(isAuthorized);
    const pending = useSelector(isFetching)
    const dispatch = useDispatch()
    const logoutJsx = <Typography color='textPrimary'>Logout</Typography>
    const loginJsx = <Typography color='textPrimary'>Login</Typography>
    const handleLogout = () => {
        if (!isAuth) {
            return
        }
        dispatch(logout())
    }

    return <>
        {pending ? <CircularProgress color='inherit' size={24} /> : <Button color='inherit' onClick={handleLogout}>{isAuth ? logoutJsx : loginJsx}</Button>}
    </>
}

export default AuthButton