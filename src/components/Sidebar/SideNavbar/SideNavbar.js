import { Backdrop, Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Friends from '../Friends/Friends'
import Navbar from './Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { setSideBar, sidebarState } from '../../../features/navigation/navigationSlice'
import { useStyles } from './styles'

const SideNavbar = () => {
    const sideBarOpen = useSelector(sidebarState)
    const classes = useStyles()
    const theme = useTheme()
    const upMD = useMediaQuery(theme.breakpoints.up('md'))
    const [sideBarClassName, setSideBarClassName] = useState('')
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setSideBar(false))
    }
    useEffect(() => {
        if (upMD) {
            setSideBarClassName(`${classes.menu}`)
        } else {
            if (sideBarOpen) {
                setSideBarClassName(`${classes.menuMDDown} ${classes.menu}`)
            } else {
                setSideBarClassName(`${classes.menuMDDown} ${classes.menu} ${classes.hidden}`)
            }
        }
    }, [upMD, sideBarOpen, classes.menuMDDown, classes.menu, classes.hidden])


    return (
        <Grid container  >
            <Paper className={sideBarClassName}>
                <Grid item >
                    <Navbar />
                </Grid>
            </Paper>
            {upMD ? null : <Backdrop className={classes.backdrop} open={sideBarOpen} onClick={handleClose}></Backdrop>}
        </Grid>
    )
}

export default SideNavbar