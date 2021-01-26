import { CircularProgress, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, usersList, isFetching, currentUsersPageToLoad, increasePage, totalUsersCount } from '../../../features/users/usersSlice'
import User from './User/User'
import { useStyles } from './styles'
const SCROLL_UPLOAD_SCALE = 1.2 //more value = more frequently upload
const USERS_COUNT_TO_LOAD = 10


const AllUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(usersList)
    const loading = useSelector(isFetching)
    const page = useSelector(currentUsersPageToLoad)
    const totalUsers = useSelector(totalUsersCount)
    const classes = useStyles()
    const [scrollMax, setScrollMax] = useState(0)
    const TOTAL_PAGES = Math.ceil(totalUsers / USERS_COUNT_TO_LOAD)
 
    useEffect(() => {
        if (users.length === 0 && !loading) {
            dispatch(getUsers(1, 20))
        }
    }, [dispatch, users.length, loading])

    const uploadMore = (e) => {
        let contentHeight = e.target.scrollHeight - e.target.offsetHeight
        if (e.target.scrollTop > scrollMax) {
            setScrollMax(e.target.scrollTop)
        }
        if (scrollMax > contentHeight / SCROLL_UPLOAD_SCALE && !loading && page <= TOTAL_PAGES) {
            dispatch(increasePage())
            dispatch(getUsers(page, USERS_COUNT_TO_LOAD))
        }
    }

    const usersJSX = (
        <>
            <Container className={classes.container} onScroll={uploadMore}>
                <div className={classes.userCards}>
                    {users.map(user => {
                        return <User key={user._id} {...user} />
                    })}
                </div>

                <div className={classes.preloader}>
                    {loading && <CircularProgress className={classes.preloaderIcon} />}
                </div>
            </Container>
        </>

    )
    return usersJSX


}

export default AllUsers