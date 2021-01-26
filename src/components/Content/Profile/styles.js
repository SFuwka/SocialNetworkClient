import { colors, makeStyles } from "@material-ui/core"
import { orange } from '@material-ui/core/colors'


export const useStyles = makeStyles({
    avatar: {
        width: 200,
        height: 200,
        backgroundColor: orange[900],
        textDecoration: 'none',
    },
    card: {
        marginTop: 16
    },
    profileInfo: {
    },
    editButton: {
        position: 'absolute',
        right: '50%',
    }
})



