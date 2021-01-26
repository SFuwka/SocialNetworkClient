import { makeStyles } from "@material-ui/core"



export const useStyles = makeStyles((theme) => ({
    appBar:{
        height: '10vh'
    },
    toolbar:{
        minHeight: '10vh'
    },
    navbar: {
        marginBottom: 12,
        flexGrow: 1,
    },
    title:{
        flexGrow: 1
    },
    loginButton:{
        textDecoration: 'none',
        color: '#FFF'
    },
    themeSwitchButton:{
        width: 10,
        padding: 0
    }
}))



