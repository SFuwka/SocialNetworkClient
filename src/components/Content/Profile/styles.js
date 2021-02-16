import { makeStyles } from "@material-ui/core"
import { green, orange } from '@material-ui/core/colors'


export const useStyles = makeStyles(theme => ({
    avatar: {
        width: 200,
        height: 200,
        backgroundColor: orange[900],
        textDecoration: 'none',
    },
    wrapNormal: {
        whiteSpace: 'normal',
        wordBreak: 'break-word'
    },
    status: {
        //maxWidth: 400,
        paddingLeft: 0,
        fontSize: 14,
        fontStyle: 'italic',
    },
    modalContainer: {
        position: 'relative',
        width: '100%',
        zIndex: 1000,
    },
    statusModal: {
        width: '100%',
        position: 'absolute'
    },
    modalButton: {
        display: 'block',
        margin: '6px auto',
    },
    hideStatus: {
        display: 'none'
    },
    card: {
        marginTop: 16,
        // marginRight: 16,
    },
    smallAvatar: {
        margin: '0 auto',
        backgroundColor: orange[900],
        textDecoration: 'none'
    },
    followings_module: {
        '& p': {
            marginLeft: 10
        },
        marginTop: 16,
        width: 200,
        fontSize: 12,
        [theme.breakpoints.down('xs')]: {
            gridRow: 3,
        },
        justifySelf: 'center',
    },
    followingUser: {
        textAlign: 'center',
        minWidth: 60,
        padding: 3
    },
    info: {
        [theme.breakpoints.down('xs')]: {
            gridRow: 2,
        },
        [theme.breakpoints.up('sm')]: {
            gridRow: '1/4',
            gridColumn: '2'
        },
    },
    ava: {
        maxWidth: 200,
        justifySelf: 'center'
    },
    profile: {
        display: 'grid',
        gridTemplateColumns: '200px auto',
        gridAutoRows: 'auto',
        gridGap: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'auto',
            justifyContent: 'center'
        },
    },
    profileInfo: {
        padding: 10,
        minWidth: 200,
        marginTop: 16,

        '&:hover': {
            '& *': {
                visibility: 'visible',
                opacity: 1,
                transition: 'all .4s'
            },
        },
    },
    hr_left: {
        background: `linear-gradient(to left, ${theme.palette.text.primary}, ${theme.palette.text.primary + '00'})`
    },
    hr_rigth: {
        background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary + '00'})`
    },
    edit: {
        background: orange['A700'],
        '&:hover': {
            background: orange[900],
            transition: 'all .4s'
        }
    },
    save: {
        background: green['A700'],
        visibility: 'visible !important',
        opacity: '1 !important',
        '&:hover': {
            background: green[800],
            transition: 'all .4s'
        }
    },
    editButton: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        '& hr': {
            flex: 1,
            height: 2,
            border: 0,
        },
    },
    buttonGroup: {
        position: 'absolute',
        visibility: 'hidden',
        opacity: 0,
        transition: 'all .4s'
    },
    buttonGroupVisible: {
        visibility: 'visible',
        opacity: 1
    },
    inputLabel: {
        display: 'inline-block',
        width: 70,
        fontSize: 14,
        fontStyle: 'italic',
        verticalAlign: 'sub'
    },
    post_module: {
        gridColumn: 2,
    }
}))



