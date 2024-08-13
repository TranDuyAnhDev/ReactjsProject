import * as loginTypes from '@constants/login';

export const postLogin = (params, history) => ({
    type: loginTypes.FETCH_LOGIN,
    payload: {
        params,
    },
    history,
});

export const loginSuccess = (params) => ({
    type: loginTypes.FETCH_LOGIN_SUCCESS,
    payload: {
        data: params,
    },
});

export const loginFailed = (error) => ({
    type: loginTypes.FETCH_LOGIN_FAILED,
    payload: {
        error,
    },
});

export const verifyMail = (params, history) => ({
    type: loginTypes.FETCH_VERIFY_MAIL,
    payload: {
        params,
    },
    history,
});

export const verifyMailSuccess = (params) => ({
    type: loginTypes.FETCH_VERIFY_MAIL_SUCCESS,
    payload: {
        data: params,
    },
});

export const verifyMailFailed = (error) => ({
    type: loginTypes.FETCH_VERIFY_MAIL_FAILED,
    payload: {
        error,
    },
});
// send mail xác nhận

export const verifyCode = (params, history) => ({
    type: loginTypes.FETCH_VERIFY_CODE,
    payload: {
        params,
    },
    history,
});

export const verifyCodeSuccess = (params) => ({
    type: loginTypes.FETCH_VERIFY_CODE_SUCCESS,
    payload: {
        data: params,
    },
});

export const verifyCodeFailed = (error) => ({
    type: loginTypes.FETCH_VERIFY_CODE_FAILED,
    payload: {
        error,
    },
});