import { createSlice } from '@reduxjs/toolkit';
import * as axios from 'axios'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isFetching: false,
        currentUser: {},
        totalUsersCount: 0,
        currentUsersPageToLoad: 3 //Because first 2 pages we load before this
    },
    reducers: {
        succcess: (state, action) => {
            state.isFetching = false
            state.users = [...state.users, ...action.payload]
        },
        increaseSubscribersCount: (state, action) => {
            state.users.map(user => {
                if (user._id === action.payload) {
                    return user.subscribersCount += 1
                }
                return user
            })
        },
        decreaseSubscribersCount: (state, action) => {
            state.users.map(user => {
                if (user._id === action.payload) {
                    return user.subscribersCount -= 1
                }
                return user
            })
        },
        pending: state => {
            state.isFetching = true
        },
        failure: (state, action) => {
            state.isFetching = false
        },
        setCurrentUser: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        setTotalCount: (state, action) => {
            state.totalUsersCount = action.payload
        },
        increasePage: (state) => {
            state.currentUsersPageToLoad++
        }
    },
});


export const { succcess, failure, pending, setCurrentUser,
    increaseSubscribersCount, decreaseSubscribersCount, setTotalCount, increasePage } = usersSlice.actions;

export const getUsers = (page, count) => async (dispatch) => {
    dispatch(pending())
    await axios.get(`${process.env.REACT_APP_API_ADRESS}/api/users/?page=${page}&count=${count}`, { withCredentials: true }).then(response => {
        if (response.data.users) {
            dispatch(setTotalCount(response.data.total))
            dispatch(succcess(response.data.users))
        } else {
            dispatch(failure())
        }
    })
}

export const getUser = (userId) => async (dispatch) => {
    dispatch(pending())
    if (!userId) {
        return dispatch(failure())
    }

    await axios.get(`http://localhost:5000/api/users/${userId}`, { withCredentials: true }).then(response => {
        if (response.data) {
            dispatch(setCurrentUser(response.data))
        } else {
            dispatch(failure())
        }
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const currentUser = state => state.users.currentUser
export const isFetching = state => state.users.isFetching
export const usersList = state => state.users.users
export const totalUsersCount = state => state.users.totalUsersCount
export const currentUsersPageToLoad = state => state.users.currentUsersPageToLoad

export default usersSlice.reducer;
