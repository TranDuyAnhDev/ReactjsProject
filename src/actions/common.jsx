import * as commonConstants from '@constants/common';

export const fetchError = (error) => ({
    type: commonConstants.ERROR,
    payload: {
        error,
    },
});
export const fetchRefresh = (data) => ({
    type: commonConstants.REFRESH,
    payload: {
        data,
    },
});

export const fetchLoading = () => ({
    type: commonConstants.IS_SHOW_LOADING,
    payload: {},
});
export const fetchHideLoading = () => ({
    type: commonConstants.IS_HIDDEN_LOADING,
    payload: {},
});