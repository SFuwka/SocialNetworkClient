import { blue, green, orange, yellow } from "@material-ui/core/colors";

const { makeStyles } = require("@material-ui/core");
const colors = [orange, green, blue, yellow]


export const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: colors[0][900],
        textDecoration: 'none'
    },
    
}))



