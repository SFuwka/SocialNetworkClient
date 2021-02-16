import { Button, CircularProgress, Container, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { authError, isAuthorized, signUp, savedForm, newAccountCreated, loginOrSignUpProgress, clearError } from '../../../../features/auth/authSlice'
import { useStyles } from "../styles"

const SignUp = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isAuth = useSelector(isAuthorized)
    const progress = useSelector(loginOrSignUpProgress)
    const err = useSelector(authError)
    const isAccountCreated = useSelector(newAccountCreated)
    const dataInForm = useSelector(savedForm)
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', password: '' })

    const handleFormChange = (e) => {
        if (err) {
            dispatch(clearError())
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUp(formData.name, formData.surname, formData.email, formData.password))
    }

    useEffect(() => {
        setFormData({ ...dataInForm })
    }, [dataInForm])

    if (isAccountCreated) {
        return <Redirect to='/login' />
    }

    if (isAuth) {
        return <Redirect to='/' />
    }

    return (
        <Container>
            <form onChange={handleFormChange} className={classes.loginForm}>
                <TextField
                    error={err.errType === 'name'}
                    helperText={err.errType === 'name' && err.message}
                    name='name'
                    type='text'
                    autoComplete='given-name'
                    value={formData.name}
                    label='Name'
                    variant='outlined' />
                <TextField
                    error={err.errType === 'surname'}
                    helperText={err.errType === 'surname' && err.message}
                    name='surname'
                    type='text'
                    autoComplete='family-name'
                    value={formData.surname}
                    label='Surname'
                    variant='outlined' />
                <TextField
                    error={err.errType === 'email'}
                    helperText={err.errType === 'email' && err.message}
                    name='email' type='email'
                    autoComplete='email'
                    value={formData.email}
                    label='Email'
                    variant='outlined' />
                <TextField
                    error={err.errType === 'password'}
                    helperText={err.errType === 'password' && err.message}
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    value={formData.password}
                    label='Password' variant='outlined' />
                <div className={classes.buttonWraper}>
                    <Button disabled={progress} onClick={handleSubmit} type='submit' variant='contained' color='primary'>
                        Submit
                        {progress && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </Button>
                </div>
            </form>
            <Typography>Have an account? <NavLink to='/login'>Log in now</NavLink></Typography>
        </Container>
    )
}

export default SignUp