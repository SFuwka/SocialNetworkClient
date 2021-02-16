import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { cachedPostsSelector, cachedPostsToSelector } from '../../../features/post/postSlice'

const PostsList = () => {
    const p = useSelector(cachedPostsSelector)
    const posts = useSelector(cachedPostsToSelector)
    

    return (
        <div>
            {posts.map(post => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
        </div>
    )
}

export default PostsList