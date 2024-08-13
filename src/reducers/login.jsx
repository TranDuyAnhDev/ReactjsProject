import * as loginType from '@constants/login';
import { toastSuccess, toastFail } from '@commons/utils';

const initialState = {
    infoLogin: {},
    errors: null,
    status: {
        isLogin: false,
        isLoad: false,
    },
    verifyMail: null,
    isVerifyCode: null
};
const statusDefault = {
    isLogin: false,
    isLoad: false,
    isVerifyMail: false,
    isVerifyCode: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginType.FETCH_LOGIN: {
            return {
                ...state,
                verifyMail: null,
                isVerifyCode: null,
                status: {
                    ...statusDefault,
                    isLoad: true,
                },
            };
        }
        case loginType.FETCH_LOGIN_SUCCESS: {
            const { data } = action.payload;
            toastSuccess('Đăng Nhập Thành Công !');
            return {
                ...state,
                infoLogin: data,
                status: {
                    isLogin: true,
                    isLoad: true,
                }
            };
        }
        case loginType.FETCH_LOGIN_FAILED: {
            const { error } = action.payload;
            let errorMessage = error?.message || 'Có lỗi đăng nhập, vui kiểm tra email, password, tài khoản JIRA 8';

            if (error?.errors?.length > 0) {
                errorMessage = error?.errors[0]?.msg;
            }
            toastFail(errorMessage);
            return {
                ...state,
                errors: error,
                status: {
                    isLogin: false,
                    isLoad: false,
                }
            };
        }
        case loginType.FETCH_VERIFY_MAIL: {
            return {
                ...state,
                status: {
                    ...statusDefault,
                    isLoad: true,
                },
            };
        }
        case loginType.FETCH_VERIFY_MAIL_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                verifyMail: data,
                errors: null,
                status: {
                    ...statusDefault,
                    isVerifyMail: true,
                }
            };
        }
        case loginType.FETCH_VERIFY_MAIL_FAILED: {
            const { error } = action.payload;
            let errorMessage = error?.message || ' vui kiểm tra email';

            if (error?.errors?.length > 0) {
                errorMessage = error?.errors[0]?.msg;
            }
            toastFail(errorMessage);
            return {
                ...state,
                errors: error,
                status: statusDefault
            };
        }

        case loginType.FETCH_VERIFY_CODE: {
            return {
                ...state,
                verifyMail: null,
                status: {
                    ...statusDefault,
                    isLoad: true,
                },
            };
        }
        case loginType.FETCH_VERIFY_CODE_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                verifyCode: data,
                errors: null,
                status: {
                    ...statusDefault,
                    isVerifyCode: true,
                }
            };
        }
        case loginType.FETCH_VERIFY_CODE_FAILED: {
            const { error } = action.payload;
            let errorMessage = error?.message;

            if (error?.errors?.length > 0) {
                errorMessage = error?.errors[0]?.msg;
            }
            toastFail(errorMessage);
            return {
                ...state,
                errors: error,
                status: statusDefault
            };
        }
        default:
            return state;
    }
};

export default reducer;
