import { makeStyles } from "@material-ui/core"



export const useStyles = makeStyles((theme) => ({
    loginForm: {
        marginTop: theme.spacing(2),
        '&>*': {
            display: 'block',
            margin: theme.spacing(2)
        }
    },
    buttonWraper: {
        position: 'relative',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))



