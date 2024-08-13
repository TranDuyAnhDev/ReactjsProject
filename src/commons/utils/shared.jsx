/* eslint-disable no-undef */
/**
 * commons/utils
 * @name shared
 */

import { shortenViewStyles } from '@constants/';
import { shortenTextStyles } from '@constants/';
import * as _ from 'lodash';
import moment from 'moment';

export const checkIsStringStyles = (value) => {
    if (value) {
        const regexCommon = /^(wi|he|wh|hw|fl|zi|op|el)+[0-9]+$/;
        if (regexCommon.test(value)) {
            return 'common';
        }
        const regexSpacing = /^(mg|mt|mb|ml|mr|mx|my|pd|pt|pb|pl|pr|px|py|bd|bl|br|bt|bb|rad|rtl|rtr|rbl|rbr|top|lef|rig|bot)+[-]?[0-9]+$/;
        if (regexSpacing.test(value)) {
            return 'spacing';
        }
        const regexText = /^(fs|fw)+[0-9]+$/;
        if (regexText.test(value)) {
            return 'text';
        }
    }
    return false;
};

export const renderStyles = (props) => {
    let textStyles = {};
    let viewStyles = {};
    let otherProps = {};
    if (props && !_.isEmpty(props)) {
        Object.keys(props).forEach((key) => {
            const typeStyles = checkIsStringStyles(key);
            if (props[key] === true && typeStyles) {
                const headerOnlyOneKey = key.slice(0, 1);
                const headerKey = key.slice(0, 2);
                const headerThreeCharKey = key.slice(0, 3);
                /* @ts-ignore */
                const keyFields = typeStyles === 'text' ? shortenTextStyles[headerKey] : shortenViewStyles[headerKey];
                const keyThreeFields = typeStyles === 'text' ? shortenTextStyles[headerThreeCharKey] : shortenViewStyles[headerThreeCharKey];
                const keyValue = Number(key.slice(2));
                const keyThreeValue = Number(key.slice(3));
                switch (true) {
                    case typeStyles === 'common' && headerKey === 'he':
                    case typeStyles === 'common' && headerKey === 'wh':
                    case typeStyles === 'common' && headerKey === 'wi':
                    case typeStyles === 'common' && headerKey === 'hw':
                        viewStyles = {
                            ...viewStyles,
                            [keyFields]: keyValue,
                        };
                        break;

                    case typeStyles === 'common' && headerKey === 'fl':
                    case typeStyles === 'common' && headerKey === 'zi':
                        viewStyles = {
                            ...viewStyles,
                            [keyFields]: keyValue,
                        };
                        break;

                    case typeStyles === 'common' && headerKey === 'op':
                        viewStyles = {
                            ...viewStyles,
                            [keyFields]: parseFloat((keyValue / 10).toFixed(1)),
                        };
                        break;

                    case typeStyles === 'spacing' && headerThreeCharKey === 'top':
                    case typeStyles === 'spacing' && headerThreeCharKey === 'lef':
                    case typeStyles === 'spacing' && headerThreeCharKey === 'bot':
                    case typeStyles === 'spacing' && headerThreeCharKey === 'rig':
                        viewStyles = {
                            ...viewStyles,
                            [keyThreeFields]: keyThreeValue,
                        };
                        break;

                    case typeStyles === 'spacing' && headerOnlyOneKey === 'r':
                        viewStyles = {
                            ...viewStyles,
                            [keyThreeFields]: keyThreeValue,
                        };
                        break;

                    case typeStyles === 'spacing' && headerOnlyOneKey === 'b':
                        viewStyles = {
                            ...viewStyles,
                            [keyFields]: keyValue,
                        };
                        break;

                    case typeStyles === 'spacing':
                        viewStyles = {
                            ...viewStyles,
                            [keyFields]: keyValue * 4,
                        };
                        break;

                    case typeStyles === 'text':
                        textStyles = {
                            ...textStyles,
                            [keyFields]: keyValue,
                            // [keyFields]: headerKey === 'fw' ? `${keyValue}` : keyValue,
                        };
                        break;

                    default:
                        break;
                }
                return;
            }
            otherProps = {
                ...otherProps,
                [key]: props[key],
            };
        });
    }
    return { textStyles, viewStyles, otherProps };
};

export const convertSelect = (data, type = null, isAll = true) => {
    const dataDefault = [{
        _id: 'All',
        value: 'All',
        label: 'Tất cả'
    }];
    const _default = (data.length === 1 || !isAll) ? [] : dataDefault;
    if (type === 'branch') {
        data.forEach((item) => _default.push({
            _id: item._id,
            value: item._id,
            label: item.branchName,
        }));
    }
    if (type === 'user') {
        data.forEach((item) => _default.push({
            _id: item._id,
            value: item._id,
            label: `${item.name}-${item.staffCode}`,
        }));
    }
    if (type === 'department') {
        data.forEach((item) => _default.push({
            _id: item._id,
            value: item._id,
            label: item.departmentName
        }));
    }
    return _default;
};
export const convertMonth = (monthString, format = 'MM/YYYY') => {
    let result = '';
    if (monthString) {
        result = moment(monthString, 'MMYYYY').format(format);
    }
    return result;
};
export const convertDateTimeLocal = (dateString, format = 'DD/MM/YYYY HH:mm:ss') => {
    let result = '';
    if (dateString) {
        var date = new Date(`${dateString}`);
        result = moment(date).format(format);
    }
    return result;
};

export const arrayObjectOfUniques = (inputArray, keyNameObj) => {
    const arrayOfUniques = [];
    inputArray.filter((item) => {
        const i = arrayOfUniques.findIndex((x) => (x[keyNameObj] === item[keyNameObj]));
        if (i <= -1) {
            arrayOfUniques.push(item);
        }
    });
    return arrayOfUniques;
};

export const isArrayLength = (a, length = 0) => {
    if (a && Array.isArray(a) && a.length >= length) {
        return true;
    }
    return false;
};

export const downloadFileData = (linkDownload) => {
    if (linkDownload) {
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = linkDownload;
        link.click();
        link.remove();
    }
};

export const compareString = (firstValue, lastValue) => {
    if (firstValue && lastValue) {
        return firstValue.toString() === lastValue.toString();
    }
    return false;
};

export const checkIsHasData = (string, array) => {
    if (isArrayLength(array, 1) && string) {
        const indexString = array.findIndex(item => item && string && compareString(item, string));
        return indexString >= 0;
    }
    return false;
};

export const isString = (string) => {
    if (string) {
        if (typeof string === 'string' || string instanceof String) {
            return true;
        }
        return false;
    }
    return false;
};

export const convertMonthCodeToString = (monthCode) => {
    if (monthCode) {
        if (typeof monthCode === 'string' && monthCode) {
            return `${monthCode.slice(0, 2)}-${monthCode.slice(2, 6)}`;
        }
    }
    return '';
};

export const ATTENDANCE_TYPE = {
    PAID_OFF: 'Tính công',
    LEAVE: 'Tính phép',
    NONE: 'Không tính công',
};

export const findConfigs = (configsList, config) => _.get(_.find(configsList,
    ['configCode', `${config}`]), 'defaultValue', null);

export const formatMoney = (m, spacing = '.', unit = 'đ') => {
    if (!Number.isInteger(m)) {
        return m;
    }
    return `${m.toFixed(0).replace(/\B(?=(?:\d{3})+(?!\d))/g, spacing)} ${unit}`;
};

export const convertNumber = (number, defaultNumberDecimal) => {
    if (_.isNumber(number) && !_.isInteger(number) && defaultNumberDecimal !== undefined) {
        return Number(number.toFixed(defaultNumberDecimal));
    }

    return number;
};

export const TYPE_FILTER = {
    DATE_PICKER: 'DATE_PICKER',
    SELECT: 'SELECT',
};
export const getAllMonthInYear = (year) => {
    const startMonth = moment(year).startOf('year').format('MMYYYY');
    const endMonth = moment(year).endOf('year').format('MMYYYY');
    const _startMonth = moment(startMonth, 'MMYYYY');
    const _endMonth = moment(endMonth, 'MMYYYY');
    const months = [];
    while (_startMonth.isSameOrBefore(_endMonth, 'MMYYYY')) {
        months.push(_startMonth.format('MMYYYY'));
        _startMonth.add(1, 'months');
    }
    return months;
};

export const TYPE_BUTTON = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    CANCEL: 'CANCEL',
};

export const SIZE_BUTTON = {
    BIG_SIZE: 'BIG_SIZE',
    NORMAL: 'NORMAL',
};
