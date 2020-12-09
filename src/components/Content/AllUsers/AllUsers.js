import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, usersList, isFetching, loadMoreUsers } from '../../../features/users/usersSlice'
import User from './User/User'
import { useStyles } from './styles'
const SCROLL_UPLOAD_SCALE = 1.2 //more value = more frequently upload

const AllUsers = () => {
    const [scrollY, setScrollY] = useState(0)
    const dispatch = useDispatch()
    const users = useSelector(usersList)
    const loading = useSelector(isFetching)
    const classes = useStyles()
    const [scrollMax, setScrollMax] = useState(0)
    useEffect(() => {
        dispatch(getUsers(1, 20))
    }, [dispatch])

    const uploadMore = (e) => {
        setScrollY(e.target.scrollTop)
        let contentHeight = e.target.scrollHeight - e.target.offsetHeight
        if (scrollY > scrollMax) {
            setScrollMax(scrollY)
        }
        if (scrollMax > contentHeight / SCROLL_UPLOAD_SCALE && !loading) {
            dispatch(getUsers(2, 10))
        }
    }
    const usersJSX = (
        <Container className={classes.container} onScroll={uploadMore}>
            {      users.map(user => {
                return <User key={user.id} {...user} />
            })}
        </Container>
    )
    return usersJSX


}

export default AllUsers