const { makeStyles } = require("@material-ui/core");


const MENU_WIDTH = 240

export const useStyles = makeStyles({
    menu: {
        marginTop: 12,
        width: MENU_WIDTH,
        zIndex: 1001,

    },
    menuMDDown: {
        left: 8,
        position: 'fixed'
    },
    hidden: {
        display: 'none'
    },
    backdrop: {
        zIndex: 1000
    }

})



