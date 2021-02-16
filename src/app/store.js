import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigation/navigationSlice'
import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/authSlice'
import subscribtionsReducer from '../features/subscription/subscriptionSlice'
import myProfileReducer from '../features/myProfile/myProfileSlice'
import postReducer from '../features/post/postSlice'


export default configureStore({
  reducer: {
    navigation: navigationReducer,
    users: usersReducer,
    auth: authReducer,
    subscribtions: subscribtionsReducer,
    myProfile: myProfileReducer,
    posts: postReducer
  },
});

