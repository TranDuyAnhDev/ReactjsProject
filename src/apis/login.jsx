import { API_LOGIN, API_VERIFY_MAIL, API_VERIFY_CODDE } from '@constants/apiEndPoint';
import { axiosBodyToAPI } from '@commons/axiosServices';

/** login */
export const loginApi = (data) => {
    return axiosBodyToAPI('POST', API_LOGIN, data);
};

/** login */
export const verifyMailApi = (data) => {
    return axiosBodyToAPI('POST', API_VERIFY_MAIL, data);
};

/** login */
export const verifyCodeApi = (data) => {
    return axiosBodyToAPI('POST', API_VERIFY_CODDE, data);
};