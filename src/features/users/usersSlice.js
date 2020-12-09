import { createSlice } from '@reduxjs/toolkit';
import * as axios from 'axios'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isFetching: false,
        currentUser: {},
        totalCount: 0
    },
    reducers: {
        succcess: (state, action) => {
            state.users = [...state.users, ...action.payload]
            state.isFetching = false
        },
        pending: state => {
            state.isFetching = true
        },
        failure: (state, action) => {
            state.isFetching = false
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            state.isFetching = false
        },
    },
});


export const { succcess, failure, pending, setCurrentUser } = usersSlice.actions;

export const getUsers = (page, count) => async (dispatch) => {
    dispatch(pending())
    await axios.get(`http://localhost:5000/api/users/?page=${page}&count=${count}`).then(response => {
        if (response.data.users) {
            console.log(response.data.total)
            dispatch(succcess(response.data.users))
        } else {
            dispatch(failure())
        }
    })
}

export const getUser = (userId) => async (dispatch) => {
    dispatch(pending())
    await axios.get(`http://localhost:5000/api/users/${userId}`).then(response => {
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

export default usersSlice.reducer;
