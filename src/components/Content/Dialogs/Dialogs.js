import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Redirect } from 'react-router-dom'
import useAuthRedirect from '../../../hooks/useAuthRedirect'



const Dialogs = (props) => {
    if (useAuthRedirect()) {
        return <Redirect to='/login' />
    }
    return <Box textAlign='center'>
        <Typography variant='h2' >Dialogs</Typography>
    </Box>
}

export default Dialogs