import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../Content/Auth/styles'

const SubmitButton = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.buttonWraper}>
            <Button disabled={props.progress} type='submit' variant='contained' color='primary'>
                {props.buttonText}
                {props.progress && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Button>
        </div>
    )
}

export default SubmitButton