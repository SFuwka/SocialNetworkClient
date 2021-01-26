import { makeStyles } from "@material-ui/core"



export const useStyles = makeStyles((theme) => ({
    loginForm: {
        marginTop: theme.spacing(2),
        '&>*': {
            display: 'block',
            margin: theme.spacing(2),
            '& label.Mui-focused': {
                fontSize: 20,
                paddingLeft: 10,
                paddingRight: 10,
                color: 'black',
                backgroundColor: 'white'


            },
            '& input': {
                '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 100px #88a4ce inset', //TODO
                    WebkitTextFillColor: 'black',
                }
            }
        },

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



