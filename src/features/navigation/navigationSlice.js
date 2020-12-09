import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        sidebarOpened: false,
    },
    reducers: {
        toggleSidebar: state => {
            state.sidebarOpened = !state.sidebarOpened
        },
        setSideBar: (state, action) => {
            state.sidebarOpened = action.payload
        }
    },
});


export const { toggleSidebar, setSideBar } = navigationSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const sidebarState = state => state.navigation.sidebarOpened

export default navigationSlice.reducer;
