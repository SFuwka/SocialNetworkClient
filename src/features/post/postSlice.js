import { createSelector, createSlice } from '@reduxjs/toolkit';
import { currentUser } from '../users/usersSlice';

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isFetching: false,
        postCreated: false,
        cachedPosts: [{ message: 'from 123 to 1', id: 1, from: 123, to: '5fd9e3585ef48e20d4da845c' },
        { message: 'from 23 to 1', id: 2, from: 23, to: 1 },
        { message: 'from 123 to 3', id: 3, from: 123, to: 3 },
        { message: 'from 2 to 1', id: 4, from: 2, to: 1 }]
    },
    reducers: {
        createPost: (state, action) => {
            state.cachedPosts = [action.payload, ...state.cachedPosts]
            state.postCreated = true
            state.isFetching = false
        },
        pending: state => {
            state.isFetching = true
        }
    },
});


export const { createPost } = postSlice.actions;

export const cachedPostsSelector = state => state.posts.cachedPosts
export const cachedPostsToSelector = createSelector(
    cachedPostsSelector,
    posts => posts.filter(post => {
        return post.message //=== userTo._id
    })
)

export const sendPost = (post) => (dispatch) => {

}

export default postSlice.reducer;
