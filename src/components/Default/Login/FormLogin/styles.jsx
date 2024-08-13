import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@constants/colors';

export default makeStyles((theme) => ({
    container: {
        background: '#f6f9ff',
        height: '100vh',
        width: '100%',
        // paddingTop: 150,
        '@media (max-width: 1600px)': {
            height: '100vh ',
            // paddingTop: 60,
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    submit: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: 40,
        backgroundColor: colors.blue2,
        color: colors.black,
        '&:hover': {
            backgroundColor: '#085F9D',
            opacity: 0.8
        },
        marginBottom: 40,
        borderRadius: '6px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    labelLogin: {
        color: colors.white,
        fontSize: 16,
    },
    copyright: {
        fontWeight: 400,
        fontSize: 14,
        color: colors.black,
        textAlign: 'center',
        marginBottom: 30
    },
    formLogin: {
        width: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 5,
        position: 'absolute',
        top: '50%',
        left: '45%',
        transform: 'translate(-50%, -45%)',
        zIndex: '11',
    },
    formInput: {
        marginTop: 12
    },
    styleLabelLogin: {
        marginTop: 25,
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'left',
        color: colors.titleBlack,
        marginBottom: 7
    },
    rememberMe: {
        marginTop: 10,
    },
    titleLogin: {
        marginTop: 26,
        fontWeight: 700,
        fontSize: 24,
        color: colors.black
    },
    logoImage: {
        position: 'absolute',
        top: '10%',
        left: '15%',
        zIndex: '12'
    },
    computerBox: {
        marginRight: '8%',
        position: 'relative'
    },
    computerImage: {
        width: '90%',
        height: '80%',
        zIndex: '10',
        position: 'relative'
    },
    girlImage: {
        position: 'absolute',
        bottom: 0,
        right: '-7%',
        width: '30%',
        height: 'auto',
        zIndex: '12'
    },
    lockImage: {
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '6%',
        height: 'auto',
        [theme.breakpoints.down('1550')]: {
            right: '-8%',
            width: '5%',
            top: '12%',
        }
    },
    userImage: {
        position: 'absolute',
        top: '25%',
        left: '-5%',
        width: '5%',
        height: 'auto',
        [theme.breakpoints.down('1600')]: {
            top: '25%',
            left: '2%',
            width: '4%',
        }
    },
    bookShelfImage: {
        top: '-12%',
        right: '13%',
        width: '18%',
        height: 'auto',
        position: 'absolute',
    },
    brickImage: {
        top: '-11%',
        right: '8%',
        zIndex: '9',
        position: 'absolute',
        width: '94%',
    },
    input: {
        backgroundColor: '#fff !important',
    },
    iconLogin: {
        width: '80%',
        height: 'auto'
    },
    threeDotImage: {
        top: '-6%',
        left: '5%',
        zIndex: '9',
        position: 'absolute',
    }

}));
