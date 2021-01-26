import { createSlice } from '@reduxjs/toolkit';


export const myProfileSlice = createSlice({
    name: 'myProfile',
    initialState: {
        isFetching: false,
        myProfile: {}
    },
    reducers: {
        setProfileInfo: (state, action) => {
            state.myProfile = action.payload
        },
        updateProfileInfo: (state, action) => {
            console.log(action.payload)
        }
    },
});


export const { setProfileInfo, updateProfileInfo } = myProfileSlice.actions;








// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const isFetching = state => state.myProfile.isFetching
export const myProfileInfo = state => state.myProfile.myProfile


export default myProfileSlice.reducer;
