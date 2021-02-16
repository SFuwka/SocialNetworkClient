import { createSlice } from '@reduxjs/toolkit';
import { updateProfileInfo } from '../myProfile/myProfileSlice';
import authApi from './apiCalls'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        isFetching: true, //not sure about it, but it helps to avoid redirect when refresh page 
        loginOrSignUpProgress: false,
        error: '',
        newAccountCreated: false
    },
    reducers: {
        succcess: (state) => {
            state.isFetching = false
            state.error = ''
            state.isAuthorized = true
        },
        clearError: (state) => {
            state.error = ''
        },
        validationError: (state, action) => {
            state.error = action.payload
        },
        accountCreated: (state) => {
            state.isFetching = false
            state.error = ''
            state.newAccountCreated = true
        },
        loginOrSignUpPending: (state) => {
            state.loginOrSignUpProgress = true
        },
        loginOrSignUpStopPending: (state) => {
            state.loginOrSignUpProgress = false
        },
        pending: state => {
            state.isFetching = true
        },
        failure: (state, action) => {
            state.isFetching = false
            state.error = action.payload
        },
        notAuthorized: (state) => {
            state.isFetching = false
            state.isAuthorized = false
        },

    },
});


export const { failure, pending, succcess, validationError, clearError,
    notAuthorized, loginOrSignUpPending, loginOrSignUpStopPending,
     accountCreated } = authSlice.actions;

export const logout = () => (dispatch) => {
    dispatch(pending())
    authApi.logout().then(() => {
        dispatch(notAuthorized())
        dispatch(updateProfileInfo(''))
    })
}

export const authMe = () => (dispatch) => {
    dispatch(pending())
    authApi.authMe().then(data => {
        if (data.user) {
            // const theme = localStorage.getItem('theme')
            // dispatch(setDarkMode(theme === 'false' ? false : true))
            dispatch(updateProfileInfo(data.user))
            return dispatch(succcess(data.user))
        }
        return dispatch(notAuthorized())
    })
}

export const login = (email, password) => (dispatch) => {
    dispatch(loginOrSignUpPending())
    authApi.login(email, password).then(response => {
        console.log(response)
        dispatch(loginOrSignUpStopPending())
        dispatch(updateProfileInfo(response))
        dispatch(succcess())
    }).catch((error) => {
        dispatch(loginOrSignUpStopPending())
        dispatch(failure(error.response.data))
    })
}

export const signUp = (name, surname, email, password) => (dispatch) => {
    dispatch(loginOrSignUpPending())

    authApi.signUp(name, surname, email, password).then(() => {
        dispatch(loginOrSignUpStopPending())
        dispatch(accountCreated())
    }).catch((error) => {
        dispatch(loginOrSignUpStopPending())
        dispatch(failure(error.response.data))
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const isAuthorized = state => state.auth.isAuthorized
export const authError = state => state.auth.error
export const isFetching = state => state.auth.isFetching
export const loginOrSignUpProgress = state => state.auth.loginOrSignUpProgress
export const savedForm = state => state.auth.formData
export const newAccountCreated = state => state.auth.newAccountCreated

export default authSlice.reducer;
