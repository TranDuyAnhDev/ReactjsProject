import * as invoiceKTType from '@constants/invoiceKT';

export const fetchInvoiceKTListCategories = () => ({
    type: invoiceKTType.FETCH_INVOICE_KT_CATEGORIES,
    payload: {},
});

export const fetchInvoiceKTCategoriesSuccess = (params) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_CATEGORIES_SUCESS,
    payload: {
        data: params,
    },
});

export const fetchInvoiceKTCategoriesFailed = (error) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_CATEGORIES_FAILED,
    payload: {
        error,
    },
});

export const fetchInvoiceKTList = (params, callback) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_LIST,
    payload: {
        params,
        callback
    },
});

export const fetchInvoiceKTListSuccess = (params) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_LIST_SUCESS,
    payload: {
        data: params,
    },
});

export const fetchInvoiceKTListFailed = (error) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_LIST_FAILED,
    payload: {
        error,
    },
});

export const fetchInvoiceKTListProjects = (params, callback) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_LIST_PROJECT,
    payload: {
        params,
        callback
    },
});

export const fetchInvoiceKTListProjectsSuccess = (params) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_LIST_PROJECT_SUCESS,
    payload: {
        data: params,
    },
});

export const fetchInvoiceKTListProjectsFailed = (error) => ({
    type: invoiceKTType.FETCH_INVOICE_KT_LIST_PROJECT_FAILED,
    payload: {
        error,
    },
});

export const updateInvoiceKT = (params, callback) => ({
    type: invoiceKTType.UPDATE_INVOICE_KT,
    payload: {
        params,
        callback
    }
});

export const updateInvoiceKTSuccess = (params) => ({
    type: invoiceKTType.UPDATE_INVOICE_KT_SUCCESS,
    payload: {
        data: params,
    }
});

export const updateInvoiceKTFailed = (error) => ({
    type: invoiceKTType.UPDATE_INVOICE_KT_FAILED,
    payload: {
        error,
    }
});

export const addInvoiceKTEdit = (id) => ({
    type: invoiceKTType.ADD_INVOICE_KT_EDIT,
    payload: {
        id
    }
});

export const removeInvoiceKTEdit = (id) => ({
    type: invoiceKTType.REMOVE_INVOICE_KT_EDIT,
    payload: {
        id
    }
});

export const clearInvoiceKTEdit = () => ({
    type: invoiceKTType.CLEAR_INVOICE_KT_EDIT
});

export const deleteInvoiceKT = (params, callback) => ({
    type: invoiceKTType.DELETE_INVOICE_KT,
    payload: {
        params,
        callback
    }
});

export const deleteInvoiceKTSuccess = (params) => ({
    type: invoiceKTType.DELETE_INVOICE_KT_SUCCESS,
    payload: {
        data: params,
    }
});

export const deleteInvoiceKTFailed = (error) => ({
    type: invoiceKTType.DELETE_INVOICE_KT_FAILED,
    payload: {
        error,
    }
});

export const publishInvoiceKT = (params, onSuccess, onError) => ({
    type: invoiceKTType.PUBLISH_INVOICE_KT,
    payload: {
        params,
        onSuccess,
        onError
    }
});

export const publishInvoiceKTSuccess = (params) => ({
    type: invoiceKTType.PUBLISH_INVOICE_KT_SUCCESS,
    payload: {
        data: params,
    }
});

export const publishInvoiceKTFailed = (error) => ({
    type: invoiceKTType.PUBLISH_INVOICE_KT_FAILED,
    payload: {
        error,
    }
});

export const resetInvoiceKT = () => ({
    type: invoiceKTType.RESET_INVOICE_KT
});