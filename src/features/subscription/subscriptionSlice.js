import { createSlice } from '@reduxjs/toolkit';
import * as axios from 'axios'
import { increaseSubscribersCount, decreaseSubscribersCount } from '../users/usersSlice';

export const subscriptionsSlice = createSlice({
    name: 'subscribtions',
    initialState: {
        following: [],
        followed: [],
        subscribersInfo: [], // delete maybe 
        followingInfo: [],
        isFetching: false,
        followingProgress: []
    },
    reducers: {
        pending: (state) => {
            state.isFetching = true
        },
        followingInProgress: (state, action) => {
            state.followingProgress = action.payload.isFetching
                ? [...state.followingProgress, action.payload.id]
                : state.followingProgress.filter(id => id !== action.payload.id)
        },
        stopPending: (state) => {
            state.isFetching = false
        },
        follow: (state, action) => {
            state.following = [...state.following, action.payload]
            state.isFetching = false
        },
        unFollow: (state, action) => {
            state.following = state.following.filter(id => id !== action.payload) // need to test
            state.isFetching = false
        },
        setFollowingList: (state, action) => {
            state.following = action.payload
            state.isFetching = false
        },
        setFollowedList: (state, action) => {
            state.followed = action.payload
            state.isFetching = false
        },
        setSubscribersInfo: (state, action) => {
            state.subscribersInfo = action.payload
            state.isFetching = false
        },
        setFollowingInfo: (state, action) => {
            state.followingInfo = action.payload
            state.isFetching = false
        }
    },
});


export const { pending, stopPending, follow, unFollow, followingInProgress, setFollowingList,
    setFollowedList, setSubscribersInfo, setFollowingInfo } = subscriptionsSlice.actions;

export const getListOfFollowing = () => async (dispatch) => {
    dispatch(pending())
    axios.get(`${process.env.REACT_APP_API_ADRESS}/api/following/`, { withCredentials: true }).then(response => {
        dispatch(setFollowingList(response.data))
    }).catch(error => {
        console.log(error) // TODO
    })
}

export const getFollowingInfo = (following) => async (dispatch) => {
    dispatch(pending())
    if (following.length > 0) {
        axios.post(`${process.env.REACT_APP_API_ADRESS}/api/users`, { usersIDs: following }, { withCredentials: true }).then(response => {
            dispatch(setFollowingInfo(response.data))
        }).catch(error => {
            console.log(error) //TODO
        })
    } else {
        dispatch(setFollowingInfo([]))
    }

}


export const getSubscribers = (followed) => async (dispatch) => {
    dispatch(pending())
    axios.post(`${process.env.REACT_APP_API_ADRESS}/api/users`, { usersIDs: followed }, { withCredentials: true }).then(response => {
        dispatch(setSubscribersInfo(response.data))
    }).catch(error => {
        console.log(error) //TODO
    })
}

export const getListOfFollowed = () => async (dispatch) => {
    dispatch(pending())
    axios.get(`${process.env.REACT_APP_API_ADRESS}/api/followed/`, { withCredentials: true }).then(response => {
        dispatch(setFollowedList(response.data))
    }).catch(error => {
        console.log(error) // TODO
    })
}

export const subscribe = (id) => async (dispatch) => {
    dispatch(pending())
    dispatch(followingInProgress({ isFetching: true, id }))
    axios.post(`${process.env.REACT_APP_API_ADRESS}/api/following/${id}`, {}, { withCredentials: true }).then(response => {
        if (response.data) {
            dispatch(follow(response.data))
            dispatch(increaseSubscribersCount(id))
            dispatch(followingInProgress({ isFetching: false, id }))
        }
    }).catch(error => {
        console.log(error.response.data) //TODO
    })
}

export const unSubscribe = (id) => async (dispatch) => {
    dispatch(pending())
    dispatch(followingInProgress({ isFetching: true, id }))
    axios.delete(`${process.env.REACT_APP_API_ADRESS}/api/following/${id}`, { withCredentials: true }).then(response => {
        if (response.status === 204) {
            dispatch(unFollow(id))
            dispatch(decreaseSubscribersCount(id))
            dispatch(followingInProgress({ isFetching: false, id }))
        }
    }).catch(error => {
        console.log(error.response.data) //TODO
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const following = state => state.subscribtions.following
export const followed = state => state.subscribtions.followed
export const isFetching = state => state.subscribtions.isFetching
export const followingProgress = state => state.subscribtions.followingProgress
export const subscribersInfo = state => state.subscribtions.subscribersInfo
export const followingInfo = state => state.subscribtions.followingInfo



export default subscriptionsSlice.reducer;
