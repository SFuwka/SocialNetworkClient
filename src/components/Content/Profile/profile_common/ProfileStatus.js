import { Button, ClickAwayListener, MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { errorStatus, failureStatus, clearError, setUserStatus } from '../../../../features/myProfile/myProfileSlice'
import { useStyles } from '../styles'


const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.status || '')
    const [editMode, setEditMode] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const error = useSelector(errorStatus)
    

    useEffect(() => {
        if (status.length > 300) {
            dispatch(failureStatus('max length is 300 characters'))
        }
    })

    const handleStatusChange = (e) => {
        if (error) {
            dispatch(clearError())
        }
        setStatus(prev => {
            return prev = e.target.value
        })
    }

    const openEditWindow = () => {
        setEditMode(true)
    }

    const closeEditWindow = () => {
        setEditMode(false)
    }

    const handleFocus = e => e.target.select()

    const saveStatus = () => {
        if (status.length > 300) {
            return dispatch(failureStatus('max length is 300 characters'))
        }
        dispatch(setUserStatus(status))
        closeEditWindow()
    }

    const body = (
        <ClickAwayListener onClickAway={closeEditWindow}>
            <div className={classes.modalContainer}>
                <Paper elevation={3} className={classes.statusModal}>
                    <TextField
                        onFocus={handleFocus}
                        autoFocus
                        multiline
                        error={!!error}
                        //className={classes.statusModal}
                        fullWidth
                        onChange={handleStatusChange}
                        value={status}
                        helperText={error && error}
                    ></TextField>
                    <Button onClick={saveStatus} size='small' className={`${classes.save} ${classes.modalButton}`}>Save</Button>
                </Paper>
            </div>


        </ClickAwayListener >
    );

    return (
        <div className={classes.status}>
            {
                props.editable ?
                    <MenuItem className={`${editMode ? classes.hideStatus : classes.status} ${classes.wrapNormal}`} onClick={openEditWindow}>
                        {status ? status : 'change status'}

                    </MenuItem> : <Typography>{status}</Typography>
            }

            {editMode ? body : ''}



        </div>
    )
}

export default ProfileStatus