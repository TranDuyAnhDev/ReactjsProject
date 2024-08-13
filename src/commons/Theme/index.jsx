import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { colors } from '@constants/colors';
import * as fonts from '@assets/fonts';
// @ts-ignore
const Theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 601,
            md: 901,
            lg: 1281,
            xl: 1537,
        },
    },
    palette: {
        primary: {
            main: colors.blue,
            light: colors.blueCheck,
            dark: colors.blueCheck,
            contrastText: colors.colorText,
        },
        secondary: {
            main: colors.blue,
            light: colors.blueCheck,
            dark: colors.blueCheck,
            contrastText: colors.white,
        },
        background: {
            default: colors.gray,
            paper: colors.white,
        },
        text: {
            primary: colors.colorText,
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: [
            'SVN-Poppins-SemiBold',
            'SVN-Poppins-Regular',
            'SVN-Poppins-Medium',
            'SVN-Poppins',
            'sans-serif',
        ].join(','),
        fontSize: 14,
        // fontWeightRegular: 'lighter',
        button: {
            textTransform: 'none',
            fontSize: 14,
        },
        body1: {
            fontSize: 14,
        },
        h1: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 4,
            color: colors.colorText,
        },
        h6: {
            fontSize: 14,
            fontWeight: 'bold',
            '&:hover': {
                color: colors.blue,
            },
        },
        subtitle1: {
            fontSize: 12,
            color: colors.colorPlaceHolder,
        },
        h5: {
            fontSize: 16,
            fontWeight: 600,
            color: colors.colorText,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [fonts.svnPopPin, fonts.svnPopPinSemiBold, fonts.svnPopPinMedium],
                '*': {
                    // 'font-display': 'block',
                    'scrollbar-width': 'thin',
                },
                '*::-webkit-scrollbar': {
                    width: 8,
                    height: 8,
                },
                '*::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': `inset 0 0 6px ${colors.colorPlaceHolder}`,
                    borderRadius: 8,
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: colors.colorPlaceHolder,
                    borderRadius: 8,
                },
                '*::-ms-clear': {
                    display: 'none !important',
                },
                '*::-ms-reveal': {
                    display: 'none !important',
                },
            },
        },
        MuiTableSortLabel: {
            root: {
                fontSize: 14,
                fontWeight: 'bold',
                '&:hover': {
                    color: colors.hoverBlue,
                },
            },
        },
        MuiTableCell: {
            root: {
                fontSize: 14,
                padding: 5,
                height: 43,
                borderBottomWidth: 0,
            },
            head: {
                fontWeight: 'bold',
                color: colors.colorText,
                borderBottomWidth: 0,
            },
            stickyHeader: {
                backgroundColor: colors.blue4,
                color: '#fff'
            },
        },
        MuiTableRow: {
            head: {
                backgroundColor: colors.blueOpacity,
            },
            footer: {
                backgroundColor: colors.blueOpacity,
            },
        },
        MuiTooltip: {
            tooltip: {
                fontSize: 14,
                backgroundColor: colors.blueOpacity,
                border: `1px solid ${colors.borderTooltip}`,
                color: colors.colorText,
                borderRadius: '6px',
                minHeight: 40,
                alignItems: 'center',
                display: 'flex',
            },
            arrow: {
                color: colors.blueOpacity,
                '&::before': {
                    backgroundColor: colors.blueOpacity,
                    border: `1px solid ${colors.borderTooltip}`,
                },
            },
        },
        MuiTypography: {
            h1: {
                fontSize: 20,
                '@media (min-width: 600px)': {
                    fontSize: 20,
                },
            },
        },
        MuiInputBase: {
            input: {
                '&::placeholder': {
                    fontStyle: 'italic',
                },
            },
        },
        MuiOutlinedInput: {
            inputMarginDense: {
                paddingTop: 8,
                paddingBottom: 8,
            },
        },
        MuiPaper: {
            rounded: {
                borderRadius: 0,
            },
        },
        MuiPopover: {
            paper: {
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                boxShadow: `0px 0px 25px ${colors.borderOpacity}`,
            },
        },
        MuiMenuItem: {
            root: {
                color: colors.colorText,
                '&:hover': {
                    backgroundColor: colors.hoverBlue,
                    color: colors.colorText,
                },
            },
        },
        MuiListItem: {
            root: {
                '&$selected': {
                    backgroundColor: `${colors.backgroundBlue} !important`,
                    color: colors.colorText,
                },
            },
        },
        MuiFormHelperText: {
            root: {
                fontSize: 9,
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 12,
                overflow: 'hidden',
            },
        },
        MuiButtonBase: {
            root: {
                '& .MuiTouchRipple-root': {
                    display: 'none',
                },
            },
        },
    },
});
const ThemeRoute = responsiveFontSizes(Theme);
export default ThemeRoute;
