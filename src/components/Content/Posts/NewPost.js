import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../features/post/postSlice'
import { Input } from '../../Common/form/fields'
import SubmitButton from '../../Common/form/SubmitButton'
import { useStyles } from '../Auth/styles'

const NewPost = () => {
    const dispatch = useDispatch()

    const onSubmit = async (values, form) => {
        if (!values.message) return
        dispatch(createPost(values))
        form.change('message', '')
    }

    return (
        <>
            <Form onSubmit={onSubmit} component={NewPostForm} />
        </>
    )
}

const NewPostForm = (props) => {
    const classes = useStyles()
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field
                name='message'
                variant='filled'
                label='New post'
                multiline
                component={Input}
            />
            <SubmitButton buttonText='send' />
        </form>
    )
}

export default NewPost