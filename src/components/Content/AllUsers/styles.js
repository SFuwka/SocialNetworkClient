const { makeStyles } = require("@material-ui/core");


export const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.background, //don't get it, TODO lag if remove this line
        overflowY: "auto",
        margin: 0,
        padding: 0,
        listStyle: "none",
        height: "90vh",
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.3)',
        }
    },
    preloader: {
        display: 'flex'
    },
    white: {
        backgroundColor: 'white'
    },
    preloaderIcon: {
        display: 'block',
        margin: 'auto'
    }
}))



