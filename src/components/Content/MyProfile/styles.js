import { makeStyles } from "@material-ui/core"
import { orange } from '@material-ui/core/colors'


export const useStyles = makeStyles((theme) => ({
    avatar: {
        minWidth: 200,
        maxWidth: 200,
        width: 200,
        height: 200,
        backgroundColor: orange[900],
        textDecoration: 'none'
    },
    smallAvatar: {
        margin: '0 auto',
        backgroundColor: orange[900],
        textDecoration: 'none'
    },
    myProfile: {
        marginTop: 16
    },
    followings_module: {
        maxWidth: 200,
        fontSize: 12
    },
    followingUser: {
        textAlign: 'center',
        minWidth: 60,
        padding: 3
    },
    followings_module_title:{
        marginLeft: theme.spacing(2)
    }
}))



