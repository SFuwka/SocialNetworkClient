import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        sidebarOpened: false,
        darkMode: true,
    },
    reducers: {
        toggleSidebar: state => {
            state.sidebarOpened = !state.sidebarOpened
        },
        setSideBar: (state, action) => {
            state.sidebarOpened = action.payload
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    },
});


export const { toggleSidebar, setSideBar, toggleDarkMode } = navigationSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const sidebarState = state => state.navigation.sidebarOpened
export const darkMode = state => state.navigation.darkMode

export default navigationSlice.reducer;
