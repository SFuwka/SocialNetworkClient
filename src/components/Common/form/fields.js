import { TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authError, clearError } from '../../../features/auth/authSlice'

export const Input = ({ input, meta, ...restProps }) => {
    const err = useSelector(authError)
    const dispatch = useDispatch()
    const isFieldError = err ? (err.errType === input.name) : false

    useEffect(() => {
        if (err) {
            dispatch(clearError())
        }
    }, [])

    return (
        <>
            <TextField
                onClick={() => dispatch(clearError())}
                autoComplete={restProps.autoComplete}
                label={restProps.label}
                variant={restProps.variant || 'outlined'}
                name={input.name}
                value={input.value}
                type={input.type}
                onChange={input.onChange}
                error={(meta.error && meta.touched) || isFieldError}
                multiline={restProps.multiline}
                helperText={(meta.error && meta.touched && <span>{meta.error}</span>)
                    || (isFieldError ? <span>{err.message}</span> : undefined)}
            />
        </>
    )
}