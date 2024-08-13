/* eslint-disable no-undef */
import axios from 'axios';

import { clearToken, getToken } from './storage';
import { toastFail } from './utils';
const name = process.env.NAME;
const pass = process.env.PASS;
//
const credentials = window.btoa(`${name}:${pass}`);
export const axiosBodyToAPI = async (method, uri, body, json = true) => {
    try {
        const xAccessToken = getToken() ? getToken() : '';
	    const basicAuth = `Basic ${credentials}`;
        const headerConfig = {
            headers: {
	            Authorization: basicAuth,
                'x-access-token': xAccessToken,
            },
        };
        let result;
        if (method === 'POST') {
            result = await axios.post(uri, body, headerConfig);
        } else if (method === 'PUT') {
            result = await axios.put(uri, body, headerConfig);
        } else if (method === 'DELETE') {
            const config = {
                ...headerConfig,
                data: body,
            };
            result = await axios.delete(uri, config);
        } else {
            result = await axios.post(uri, body, headerConfig);
        }
        return result;
    } catch (error) {
        return error;
    }
};
export const sendQueryToAPI = async (uri) => {
    try {
        const xAccessToken = getToken() ? getToken() : '';
	    const basicAuth = `Basic ${credentials}`;
        const headerConfig = {
            headers: {
	            Authorization: basicAuth,
                'x-access-token': xAccessToken,
            },
        };
        const result = await axios.get(uri, headerConfig);
        if ([40005, 40022].includes(result?.data?.statusCode)) {
            clearToken();
            setTimeout(() => {
                location.replace('/');
            }, 3000);
            let mess = 'Phiên đăng nhập hết hạn vui lòng đăng nhập lại';
            if (result?.data?.message) {
                mess = result?.data?.message;
            }
            toastFail(mess);
            return result;
        }
	    return result;
    } catch (error) {
	    return error;
    }
};
export const axiosFormDataBodyToAPI = async (method, uri, body, json = true) => {
    try {
        const xAccessToken = getToken() ? getToken() : '';
	    const basicAuth = `Basic ${credentials}`;
        const headerConfig = {
            // timeout: 1000,
            headers: {
	            Authorization: basicAuth,
                'x-access-token': xAccessToken,
                'Content-Type': 'multipart/form-data',
            },
        };
        let result;
        if (method === 'POST') {
            result = await axios.post(uri, body, headerConfig);
        } else if (method === 'PUT') {
            result = await axios.put(uri, body, headerConfig);
        } else if (method === 'DELETE') {
            const config = {
                ...headerConfig,
                data: body,
            };
            result = await axios.delete(uri, config);
        } else {
            result = await axios.post(uri, body, headerConfig);
        }
        if ([40005, 40022].includes(result?.data?.statusCode)) {
            clearToken();
            setTimeout(() => {
                location.replace('/');
            }, 3000);
            let mess = 'Phiên đăng nhập hết hạn vui lòng đăng nhập lại';
            if (result?.data?.message) {
                mess = result?.data?.message;
            }
            toastFail(mess);
            return result;
        }
        return result;
    } catch (error) {
        return error;
    }
};

export const sendQuerySupportAPI = async (uri) => {
    try {
        const result = await axios.get(uri);
        return result;
    } catch (error) {
        return error;
    }
};
