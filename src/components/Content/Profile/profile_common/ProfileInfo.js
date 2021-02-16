import { Button, ButtonGroup, CardContent, CircularProgress, ClickAwayListener, NativeSelect, Paper, TextField, Typography } from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { DatePicker } from '@material-ui/pickers';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfileInfoDB } from '../../../../features/myProfile/myProfileSlice';
import { useStyles } from '../styles'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, preload, editable }) => {
    const [editMode, setEditMode] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [birthday, setBirthday] = useState(new Date(profile.birthday))
    const [profileInfo, setProfileInfo] = useState({ ...profile })
    const turnOnEditMode = () => {
        setEditMode(true)
    }

    const turnOffEditMode = () => {
        setEditMode(false)
    }

    const cancelEdit = () => {
        setProfileInfo({ ...profile })
        setBirthday(new Date(profile.birthday))
        setEditMode(false)
    }



    const handleInputChange = e => {
        setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value })
    }

    const handleBirthdayChange = (e) => {
        if (e) {
            setBirthday(e._d)
            setProfileInfo({ ...profileInfo, birthday: e._d })
        } else {
            setBirthday('')
        }
    }
    const handleFocus = e => e.target.select()

    const saveProfileData = () => {
        dispatch(updateProfileInfoDB(profileInfo))
        turnOffEditMode()
    }
    const statusChangeHandler = () => {
        console.log('changing')
    }
    return (
        <>
            {preload && <CardContent><CircularProgress /></CardContent>}
            {!preload && <ClickAwayListener onClickAway={turnOffEditMode}>
                <Paper className={classes.profileInfo}>
                    <Typography variant='h4'>{profile.name} {profile.surname}</Typography>
                    <ProfileStatus changeHandler={statusChangeHandler} editable={editable} status={profile.status} />
                    <div className={classes.editButton}>
                        <hr className={classes.hr_left} />
                        {editable &&
                            <ButtonGroup className={editMode ? classes.buttonGroupVisible : classes.buttonGroup}>
                                <Button
                                    className={!editMode ? classes.edit : classes.save}
                                    startIcon={!editMode ? <EditOutlinedIcon /> : <SaveAltIcon />}
                                    variant='contained'
                                    size='small'
                                    onClick={!editMode ? turnOnEditMode : saveProfileData}>{!editMode ? 'Edit' : 'Save'}
                                </Button>
                                {editMode &&
                                    <Button onClick={cancelEdit} variant='contained' size='small' color='secondary'>Cancel</Button>}
                            </ButtonGroup>}
                        <hr className={classes.hr_rigth} />
                    </div>
                    <div>
                        {!editMode && <Typography>{profileInfo.city}</Typography>}
                        {editMode && <>
                            <span className={classes.inputLabel}>City: </span>
                            <TextField name='city' value={profileInfo.city || ''} onFocus={handleFocus} onChange={handleInputChange}></TextField>
                        </>}
                    </div>
                    <div>
                        {!editMode && <Typography>{profileInfo.country}</Typography>}
                        {editMode && <>
                            <span className={classes.inputLabel}>Country: </span>
                            <TextField name='country' value={profileInfo.country || ''} onFocus={handleFocus} onChange={handleInputChange}></TextField>
                        </>}
                    </div>

                    <div>
                        {!editMode && <Typography>
                            {birthday.getDay() ? `${birthday.toLocaleString('default', { month: 'long' })} ${birthday.getDate()} ${birthday.getFullYear()}` : ''}
                        </Typography>}
                        {editMode && <>
                            <span className={classes.inputLabel}>Birthday: </span>
                            <DatePicker
                                disableFuture
                                openTo="year"
                                format="DD/MM/yyyy"
                                views={["year", "month", "date"]}
                                value={birthday || new Date()}
                                onChange={handleBirthdayChange}
                            />
                        </>}
                    </div>
                    <div>
                        {!editMode && <Typography>{profileInfo.gender}</Typography>}
                        {editMode && <>
                            <span className={classes.inputLabel}>Gender: </span>
                            <NativeSelect name='gender' value={profileInfo.gender || ''} onChange={handleInputChange}>
                                <option style={{ display: 'none' }}></option>
                                <option>male</option>
                                <option>female</option>
                            </NativeSelect>
                        </>}
                    </div>
                </Paper>
            </ClickAwayListener>}
        </>

    )
}

export default ProfileInfo
