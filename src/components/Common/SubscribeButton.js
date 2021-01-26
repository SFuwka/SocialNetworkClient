import { IconButton } from '@material-ui/core'
import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useDispatch, useSelector } from 'react-redux';
import { following, followingProgress, subscribe, unSubscribe } from '../../features/subscription/subscriptionSlice';


const SubscribeButton = (props) => {
    const dispatch = useDispatch()
    const listOfFollowing = useSelector(following)
    const isFollowing = listOfFollowing.includes(props.id)
    const followingInProgress = useSelector(followingProgress)

    const toggleFollow = () => {
        if (!isFollowing) {
            dispatch(subscribe(props.id))
        } else {
            dispatch(unSubscribe(props.id))
        }
    }
    return (
        <IconButton style={{ margin: 'auto', display: 'block' }} disabled={followingInProgress.some(id => id === props.id)} onClick={toggleFollow}>
            {isFollowing ? <RemoveCircleIcon fontSize='large' /> : <AddCircleIcon fontSize='large' color='primary' />}
        </IconButton>
    )
}

export default SubscribeButton