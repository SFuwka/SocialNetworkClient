import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navigationReducer from '../features/navigation/navigationSlice'
import usersReducer from '../features/users/usersSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    users: usersReducer
  },
});

