import React from 'react';
import { Box } from '@material-ui/core';
import FormLogin from './FormLogin/index';
import useStyles from './styles';

export default function LoginComponent(props) {
    const { onSubmitSave, isLoad } = props;
    const classes = useStyles();
    return (
        <>
            <Box className={classes.container}>
                <FormLogin onSubmitSave={onSubmitSave} isLoad={isLoad} />
            </Box>
            {/* <FormSendMail
                classes={classes}
                openDialog={openDialog}
                onCloseDialog={onCloseDialog}
                dialogTitle={dialogTitle}
                onSendMail={onSendMail}
                initialValues={null}
            />
            <FormVerify
                classes={classes}
                openDialog={openCodeDialog}
                onCloseDialog={onCloseDialog}
                dialogTitle={dialogTitle}
                onVerify={onVerify}
                initialValues={null}
            /> */}
        </>
    );
}
