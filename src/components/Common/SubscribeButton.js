import { IconButton } from '@material-ui/core'
import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useDispatch, useSelector } from 'react-redux';
import { following, followingProgress, subscribe, unSubscribe } from '../../features/subscription/subscriptionSlice';


const SubscribeButton = ({ userId }) => {
    const dispatch = useDispatch()
    const listOfFollowing = useSelector(following)
    const isFollowing = listOfFollowing.includes(userId)
    const followingInProgress = useSelector(followingProgress)
    const toggleFollow = () => {
        if (!isFollowing) {
            dispatch(subscribe(userId))
        } else {
            dispatch(unSubscribe(userId))
        }
    }
    return (
        <>
            {userId && <IconButton style={{ margin: 'auto', display: 'block' }} disabled={followingInProgress.some(id => id === userId)} onClick={toggleFollow}>
                {isFollowing ? <RemoveCircleIcon fontSize='large' /> : <AddCircleIcon fontSize='large' color='primary' />}
            </IconButton>}
        </>
    )
}

export default SubscribeButton