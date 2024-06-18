import { makeStyles } from '@material-ui/core/styles';
import {colors} from '@constants/colors';
export default makeStyles((theme)=>({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        height:'100vh',
        backgroundColor: '#ececec',
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        overflowY: 'hidden'
        // padding: theme.spacing(1),
    },
    contentAdmin: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 10px',
        flexDirection: 'column',
        backgroundColor: '#EEF0F8',
    }
}));