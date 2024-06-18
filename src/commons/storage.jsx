/* eslint-disable no-undef */
import { TOKEN } from '@constants/index';

// token
export const setToken = (value) => {
    try {
        return localStorage.setItem(TOKEN, value);
    } catch (error) {
        return false;
    }
};

export const getToken = () => {
    try {
        return localStorage.getItem(TOKEN);
    } catch (error) {
        return false;
    }
};
export const deleteToken = () => {
    try {
        return localStorage.removeItem(TOKEN);
    } catch (error) {
        return false;
    }
};
export const clearToken = () => {
    try {
        return localStorage.clear();
    } catch (error) {
        return false;
    }
};

//user info

export const setUserInfo = (value) => {
    try {
        return localStorage.setItem('USER_INFO', JSON.stringify(value));
    } catch (error) {
        return false;
    }
};

export const getUserInfo = () => {
    try {
        const value = localStorage.getItem('USER_INFO');
        if (typeof value === 'string') {
            return JSON.parse(value);
        }
        return '';
    } catch (error) {
        return '';
    }
};
//user info



export const setServiceToken = (value) => {
    try {
        return localStorage.setItem('SERVICE_TOKEN', JSON.stringify(value));
    } catch (error) {
        return false;
    }
};

export const getServiceToken = () => {
    try {
        const value = localStorage.getItem('SERVICE_TOKEN');
        if (typeof value === 'string') {
            return JSON.parse(value);
        }
        return '';
    } catch (error) {
        return '';
    }
};

export const setPermission = (value) => {
    try {
        return localStorage.setItem('PERMISSION', JSON.stringify(value));
    } catch (error) {
        return false;
    }
};

export const getPermission = () => {
    try {
        const value = localStorage.getItem('PERMISSION');
        if (typeof value === 'string') {
            return JSON.parse(value);
        }
        return '';
    } catch (error) {
        return '';
    }
};

export const setLanguage = (value) => {
    try {
        return localStorage.setItem('LANGUAGE', value);
    } catch (error) {
        return false;
    }
};

export const getLanguage = () => {
    try {
        return localStorage.getItem('LANGUAGE');
    } catch (error) {
        return false;
    }
};

// redirect Url

export const setRedirect = (value) => {
    try {
        return localStorage.setItem('REDIRECT', value);
    } catch (error) {
        return false;
    }
};

export const getRedirect = () => {
    try {
        return localStorage.getItem('REDIRECT');
    } catch (error) {
        return false;
    }
};
export const deleteRedirect = () => {
    try {
        return localStorage.removeItem('REDIRECT');
    } catch (error) {
        return false;
    }
};

// setTimeCheckIn, checkOut

export const setCheckIn = (value) => {
    try {
        return localStorage.setItem('CHECKIN', value);
    } catch (error) {
        return false;
    }
};

export const getCheckIn = () => {
    try {
        return localStorage.getItem('CHECKIN');
    } catch (error) {
        return false;
    }
};