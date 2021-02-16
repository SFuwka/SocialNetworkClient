import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { authError, isAuthorized, signUp, savedForm, newAccountCreated, loginOrSignUpProgress, clearError } from '../../../../features/auth/authSlice'
import { Input } from '../../../Common/form/fields'
import SubmitButton from '../../../Common/form/SubmitButton'
import { requiredEmail, requiredPassword, required } from '../../../Common/validators/validators'
import { useStyles } from "../styles"

const SignUp = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isAuth = useSelector(isAuthorized)
    const err = useSelector(authError)
    const isAccountCreated = useSelector(newAccountCreated)

    const onSubmit = (values) => {
        dispatch(signUp(values.name, values.surname, values.email, values.password))
    }

    if (isAccountCreated) {
        return <Redirect to='/login' />
    }

    if (isAuth) {
        return <Redirect to='/' />
    }

    return (
        <Container>
            <Form component={SignUpForm} onSubmit={onSubmit} />
            <Typography className={classes.authFooter}>Have an account? <NavLink to='/login'>Log in now</NavLink></Typography>
        </Container>
    )
}

const SignUpForm = (props) => {
    const classes = useStyles()
    const progress = useSelector(loginOrSignUpProgress)

    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div>
                <Field
                    validate={required}
                    autoComplete='given-name'
                    name='name'
                    component={Input}
                    label='Name'
                />
            </div>
            <div>
                <Field
                    validate={required}
                    autoComplete='family-name'
                    name='surname'
                    component={Input}
                    label='Surname' />
            </div>
            <div>
                <Field
                    autoComplete='email'
                    validate={requiredEmail}
                    name='email'
                    component={Input}
                    label='Email' />
            </div>
            <div>
                <Field
                    autoComplete='current-password'
                    validate={requiredPassword}
                    name='password'
                    type='password'
                    component={Input}
                    label='Password' />
            </div>
            <SubmitButton buttonText='Submit' progress={progress} />
        </form>
    )
}

export default SignUp