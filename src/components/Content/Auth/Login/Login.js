import { Button, CircularProgress, Container, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { login, authError, isAuthorized, loginOrSignUpProgress, clearError, validationError } from '../../../../features/auth/authSlice'
import { useStyles } from "../styles"

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ email: '', password: '' })
    const err = useSelector(authError)
    const progress = useSelector(loginOrSignUpProgress)

    const isAuth = useSelector(isAuthorized)
    console.count('Login')

    const handleFormChange = (e) => {
        if (err) {
            dispatch(clearError())
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.email) {
            return dispatch(validationError({ errType: 'email', message: 'email is required' }))
        }
        if (!formData.password) {
            return dispatch(validationError({ errType: 'password', message: 'password is required' }))
        }
        dispatch(login(formData.email, formData.password))
    }

    useEffect(() => {
        console.log(err.errType)
    }, [err])

    if (isAuth) {
        return <Redirect to='/' />
    }

    return (
        <Container className={classes.root}>
            <form onChange={handleFormChange} className={classes.form}>
                <TextField
                    autoComplete='email'
                    error={err.errType === 'email'}
                    name='email'
                    type='email'
                    value={formData.email}
                    label='Email'
                    variant='outlined'
                    helperText={err.errType === 'email' && err.message} />
                <TextField
                    autoComplete='current-password'
                    error={err.errType === 'password'}
                    name='password'
                    type='password'
                    value={formData.password}
                    label='Password'
                    variant='outlined'
                    helperText={err.errType === 'password' && err.message}
                />

                <div className={classes.buttonWraper}>
                    <Button disabled={progress} onClick={handleSubmit} type='submit' variant='contained' color='primary'>
                        Submit
                        {progress && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </Button>
                </div>
            </form>
            <Typography >Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></Typography>
        </Container>
    )
}

export default Login