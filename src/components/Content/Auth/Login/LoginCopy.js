import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { Form, Field } from 'react-final-form'
import { Input } from '../../../Common/form/fields'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { login, isAuthorized, loginOrSignUpProgress, clearError } from '../../../../features/auth/authSlice'
import { composeValidators, requiredEmail, requiredPassword, isValidEmail } from '../../../Common/validators/validators'
import { useStyles } from "../styles"
import SubmitButton from '../../../Common/form/SubmitButton'

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isAuth = useSelector(isAuthorized)

    const onSubmit = (values) => {
        dispatch(login(values.email, values.password))
    }

    if (isAuth) {
        return <Redirect to='/' />
    }

    return (
        <Container>
            <Form component={LoginForm} onSubmit={onSubmit} />
            <Typography className={classes.authFooter}>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></Typography>
        </Container>
    )
}

const LoginForm = (props) => {
    const classes = useStyles()
    const progress = useSelector(loginOrSignUpProgress)

    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div>
                <Field
                    validate={composeValidators(requiredEmail, isValidEmail)}
                    label='Email'
                    autoComplete='email'
                    component={Input}
                    name={'email'}>
                </Field>
            </div>
            <div>
                <Field
                    validate={requiredPassword}
                    type='password'
                    label='Password'
                    autoComplete='current-password'
                    component={Input}
                    name={'password'}>
                </Field>
            </div>
            <SubmitButton buttonText='Submit' progress={progress} />
        </form>
    )
}

export default Login