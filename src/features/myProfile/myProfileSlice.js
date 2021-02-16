import { createSlice } from '@reduxjs/toolkit';
import profileApi from './apiCalls';


export const myProfileSlice = createSlice({
    name: 'myProfile',
    initialState: {
        isFetching: false,
        updateFetching: false,
        statusFetching: false,
        myProfile: {},
        errorStatus: '',
    },
    reducers: {
        pending: (state) => {
            state.isFetching = true
        },
        failureStatus: (state, action) => {
            state.errorStatus = action.payload
            state.statusFetching = false
        },
        clearError: (state) => {
            state.errorStatus = ''
        },
        statusPending: (state) => {
            state.statusFetching = true
        },
        setStatus: (state, action) => {
            state.myProfile.status = action.payload
            state.statusFetching = false
        },
        updateProfileInfo: (state, action) => {
            state.myProfile = action.payload
            state.isFetching = false
        },
    },
});

export const setUserStatus = (status) => (dispatch) => {
    dispatch(statusPending())
    profileApi.setUserStatus(status).then(response => {
        dispatch(setStatus(response.status))
    }).catch((e) => {
        dispatch(failureStatus(e.response.data.message))
    })
}

export const updateProfileInfoDB = (profileInfo) => (dispatch) => {
    dispatch(pending())
    profileApi.updateProfileInfo(profileInfo).then(response => {
        if (response.status === 201) {
            dispatch(updateProfileInfo(profileInfo))
        }
        console.log(response)
    })
}

export const { updateProfileInfo, pending, statusPending, setStatus, failureStatus,clearError } = myProfileSlice.actions;








// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const isFetching = state => state.myProfile.isFetching
export const myProfileInfo = state => state.myProfile.myProfile
export const myProfileStatus = state => state.myProfile.myProfile.status
export const statusFetching = state => state.myProfile.statusFetching
export const errorStatus = state => state.myProfile.errorStatus


export default myProfileSlice.reducer;
