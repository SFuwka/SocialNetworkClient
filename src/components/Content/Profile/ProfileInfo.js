import { Button, CardContent, ClickAwayListener, Divider, MenuItem, NativeSelect, Select, TextField, Typography } from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React, { useState } from 'react'
import { useStyles } from './styles'

const ProfileInfo = ({ profile, editHandler }) => {
    const classes = useStyles()
    const birthday = new Date(profile.birthday)
    const [editMode, setEditMode] = useState(false)
    const [selectedDate, handleDateChange] = useState(new Date());

    const turnOnEditMode = () => {
        setEditMode(true)
    }

    const turnOffEditMode = () => {
        setEditMode(false)
    }

    const saveProfileInfo = () => {
        if (selectedDate._d) {
            editHandler(selectedDate.format())
        }
        
        setEditMode(false)
    }
    return (
        <ClickAwayListener onClickAway={turnOffEditMode}>
            <CardContent className={editHandler && classes.profileInfo}>
                <Typography variant='h5'>{profile.name} {profile.surname} </Typography>
                <Divider></Divider>
                <div>
                    {((profile.gender && !editMode) && <Typography>Gender: {profile.gender}</Typography>)
                        || (editMode && <NativeSelect name='gender' onChange={editHandler} children={MenuItem} label='gender' value={profile.gender || ''}>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value=''>Not specified</option>
                        </NativeSelect>)}
                </div>
                <div>
                    {((profile.birthday && !editMode) && <Typography>Birthday: {birthday.toLocaleString('default', { month: 'long' })}{' '}
                        {birthday.getDate()} {birthday.getFullYear()} </Typography>)
                        || (editMode && <KeyboardDatePicker
                            disableFuture
                            value={profile.birthday || selectedDate}
                            format="yyyy/MM/DD"
                            views={['year', 'month', 'date']}
                            onChange={date => handleDateChange(date)}
                        />)}
                </div>

                {profile.country && <Typography>Country: {profile.country}</Typography>}
                {profile.city && <Typography>City: {profile.city}</Typography>}
                <Typography>Email: {profile.email}</Typography>
                <Divider variant='middle' />
                {editHandler && <div style={{ position: 'relative' }}>
                    <Button
                        size='small'
                        onClick={editMode ? saveProfileInfo : turnOnEditMode}
                        name='editMode'
                        variant='contained'
                        startIcon={editMode ? <SaveAltIcon /> : <EditOutlinedIcon />}
                    >{editMode ? 'Save' : 'Edit'}
                    </Button>
                </div>}
            </CardContent>
        </ClickAwayListener>



    )
}

export default ProfileInfo
