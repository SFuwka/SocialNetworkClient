import React from 'react'
import { useSelector } from 'react-redux'
import { cachedPostsSelector } from '../../../features/post/postSlice'
import NewPost from './NewPost'
import PostsList from './PostsList'
import { useStyles } from './styles'

const PostModule = () => {
    const classes = useStyles()
    return (
        <>
            <NewPost classes={classes} />
            <PostsList  />
        </>
    )
}

export default PostModule