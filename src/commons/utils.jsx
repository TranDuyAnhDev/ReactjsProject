/* eslint-disable no-undef */
/**
 * commons
 * @name utils
 */

import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { getPermission } from '@commons/storage';
import { STATUS_PERMISSION } from '@constants/index';
import useDimensions from '@helpers/Dimensions';
import { useConfigs } from '@hook/useConfigs';
import { makeStyles } from '@material-ui/core/styles';
import * as _ from 'lodash';
import moment from 'moment';
import { getUserInfo } from '@commons/storage';
import {
    CREATED_AT,
    DESC,
    LIMIT,
    TYPE_FILTER,
} from '@constants/index';
import { colors } from '@constants/colors';
import { ENUM_SYMBOL_TIME } from '@constants/timekeepings';
import { isArrayLength } from './utils/shared';
import { useTranslate } from '@hook/useTranslate';
import {io} from 'socket.io-client';
import { clearToken, getToken } from './storage';

const configDimension = () => {
    const targetRef = useRef();
    useDimensions(targetRef);
};
const actionChooseHeadCell = (item, headCells) => {
    const dataClone = [...headCells];
    dataClone[item.id].isVisible = !item.isVisible;
    const hasIsVisible = _.filter(dataClone, { isVisible: true });
    return { data: dataClone, countIsVisible: hasIsVisible.length };
};

const getFilter = (data, type, dataFilter = null) => {
    let filter = null;
    if (type === TYPE_FILTER.initial) {
        filter = {
            limit: 10,
            page: 1,
            search: '',
            status: 'All',
            sortKey: CREATED_AT,
            sortOrder: -1,
        };
    } else if (type === TYPE_FILTER.pagination) {
        filter = {
            ...data,
            page: dataFilter,
        };
    } else if (type === TYPE_FILTER.limit) {
        filter = {
            ...data,
            page: 1,
            limit: dataFilter.name,
        };
    } else if (type === TYPE_FILTER.submit) {
        filter = {
            ...data,
            status: _.get(dataFilter, 'status', 'All'),
            page: 1,
            search: '',
        };
    } else if (type === TYPE_FILTER.search) {
        filter = {
            ...data,
            page: 1,
            status: 'All',
            search: _.get(dataFilter, 'search', ''),
        };
    } else if (type === TYPE_FILTER.reset) {
        filter = {
            ...data,
            status: 'All',
            page: 1,
            search: '',
        };
    } else if (type === TYPE_FILTER.refresh) {
        filter = {
            ...data,
            limit: _.get(data, 'limit', LIMIT),
            page: _.get(data, 'page', 1),
            search: _.get(data, 'search', ''),
            status: _.get(data, 'status', 'All'),
            sortKey: _.get(data, 'sortKey', CREATED_AT),
            sortOrder: _.get(data, 'sortOrder', (DESC ? -1 : 1)),
        };
    } else if (type === TYPE_FILTER.filter) {
        filter = {
            limit: _.get(data, 'limit', 10),
            status: _.get(data, 'status', 'All'),
        };
    } else if (type === TYPE_FILTER.sort) {
        filter = {
            ...data,
            sortKey: _.get(dataFilter, 'sortKey', CREATED_AT),
            sortOrder: _.get(dataFilter, 'sortOrder', '-1'),
        };

    }
    return filter;
};

const toastSuccess = (message) => {
    toast.clearWaitingQueue();
    return toast.success((message), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

const toastFail = (message, time) => {
    toast.clearWaitingQueue();
    return toast.error((message), {
        position: 'top-right',
        autoClose: time || 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

const toastWarnning = (message) => {
    return toast.error((message), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

export const isValidDay = (value) => {
    if (value && value.length) {
        return value.substring(0, 10);
    }
    if (value && !value.length) {
        const dayFormatCreate = (value).format('YYYY-MM-DD');
        return dayFormatCreate;
    }
};

export const checkPermission = (status) => {
    let dataPermission = getPermission();
    let dataTemp = null;
    let check = false;
    if (dataPermission) {
        dataTemp = _.find(dataPermission, ['screenUrl', window.location.pathname.replace('/', '')]);
        check = _.get(dataTemp, status, STATUS_PERMISSION.allow) === STATUS_PERMISSION.allow;
    }
    return check;
};

export const checkPermissionExtension = (type, status) => {
    if (type && checkPermission(type)) {
        let dataPermission = getPermission();
        const keyList = `${type}Detail`;
        let dataTemp = null;
        let check = false;
        if (dataPermission) {
            dataTemp = _.find(dataPermission, ['screenUrl', window.location.pathname.replace('/', '')]);
            if (dataTemp && dataTemp[keyList] && isArrayLength(dataTemp[keyList], 1)) {
                const checkExist = dataTemp[keyList].findIndex(item => item === status);
                check = checkExist > -1;
            }
        }
        return check;
    }
    return false;
};

export const checkPermissionByModule = (moduleName, status) => {
    let dataPermission = getPermission();
    let dataTemp = null;
    let check = false;
    if (dataPermission) {
        dataTemp = _.find(dataPermission, ['module', moduleName]);
        check = _.get(dataTemp, status, STATUS_PERMISSION.allow) === STATUS_PERMISSION.allow
            && dataTemp?.screenUrl === window.location.pathname.replace('/', '');
    }
    return check;
};

export const checkPermissionModuleAction = (moduleName, action) => {
    let dataPermission = getPermission();
    let dataTemp = null;
    let check = false;
    if (dataPermission) {
        dataTemp = _.find(dataPermission, ['module', moduleName]);
        check = _.get(dataTemp, action, STATUS_PERMISSION.deny) === STATUS_PERMISSION.allow;
    }
    return check;
};

export const check_Integer = (value) => {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
};

export const convertFormatMoney = (money) => {
    let newMoney = '0';
    newMoney = money
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return newMoney;
};

export const convertFormatMoneyDotted = (money) => {
    let newMoney = '0';
    if (check_Integer(money)) {
        newMoney = money
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return newMoney;
};
export const checkUrl = (value) => {
    // eslint-disable-next-line max-len
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
};

export const defaultLoadingList = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
    { index: 6 },
    { index: 7 },
    { index: 8 },
    { index: 9 },
    { index: 10 },
];

export const currencyFormat = (num) => num.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export {
    configDimension,
    getFilter,
    actionChooseHeadCell,
    toastSuccess, toastFail, toastWarnning
};
export const renderStatus = (status = '', isDisable) => {
    const useStyles = makeStyles((theme) => (
        {
            boxButton: {
                padding: '5px 9px',
                borderRadius: 6,
                // fontWeight: !isDisable ? 'nomal' : 'nomal',
                fontWeight: 'nomal',
                position: 'relative',
                display: 'inline-block',
                width: 100,
                textAlign: 'center',
                opacity: !isDisable ? 0.4 : 1,
                '&::before': {
                    content: '""',
                    opacity: 0.2,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'currentColor',
                    borderRadius: 6,
                }
            }
        }
    ));

    const classes = useStyles();

    let contentButton = '';
    let color = '';
    switch (status) {
    case 'APPROVED':
        contentButton = 'Đã duyệt';
        color = colors.statusGeen;
        break;
    case 'PENDING':
        contentButton = 'Chờ duyệt';
        color = colors.statusYellow;
        break;
    case 'REJECT':
        contentButton = 'Từ chối';
        color = colors.statusRed;
        break;
    case 'REFUSED':
        contentButton = 'Từ chối';
        color = colors.statusRed;
        break;
    default:
        contentButton = '';
        color = '';
        break;
    }
    return <div className={classes.boxButton} style={{ color }}>
        {contentButton}
    </div>;
};
export const renderReportStatus = (status = '', isDisable) => {
    const useStyles = makeStyles((theme) => (
        {
            boxButton: {
                padding: '3px 3px',
                borderRadius: 6,
                fontWeight: !isDisable ? 'nomal' : 'bold',
                position: 'relative',
                display: 'inline-block',
                width: 120,
                textAlign: 'center',
                opacity: !isDisable ? 0.4 : 1,
                '&::before': {
                    content: '""',
                    opacity: 0.2,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'currentColor',
                    borderRadius: 6,
                }
            }
        }
    ));

    const classes = useStyles();

    let contentButton = '';
    let color = '';
    switch (status) {
    case 'APPROVED':
        contentButton = 'Đã chốt số';
        color = colors.statusGeen;
        break;
    case 'PENDING':
        contentButton = 'Chưa chốt số';
        color = colors.statusYellow;
        break;
    case 'REJECT':
        contentButton = 'Bị trả lại';
        color = colors.statusRed;
        break;
    default:
        contentButton = '';
        color = '';
        break;
    }
    return <div className={classes.boxButton} style={{ color }}>
        {contentButton}
    </div>;
};

export const timeSheetStatus = [
    {
        title: 'timeKeeping:timeSheetStatus:title1',
        symbol: 'x',
        background: '#fff',
    },
    {
        title: 'timeKeeping:timeSheetStatus:title2',
        symbol: 'L',
        background: '#fff',
    },
    {
        title: 'timeKeeping:timeSheetStatus:title3',
        symbol: 'P',
        color: '#FF0000',
        background: '#fff',
    },
    {
        title: 'timeKeeping:timeSheetStatus:title4',
        symbol: 'P/2',
        color: '#FF0000',
        background: '#fff',
    },
    {
        title: 'timeKeeping:timeSheetStatus:title5',
        symbol: 'M1',
        background: '#E4DFEC',
        hoverTitle: 'timeKeeping:timeSheetStatus:hover_title_5'
    },
    {
        title: 'timeKeeping:timeSheetStatus:title6',
        symbol: 'M2',
        background: '#E4DFEC',
        hoverTitle: 'timeKeeping:timeSheetStatus:hover_title_6'
    },
    {
        title: 'timeKeeping:timeSheetStatus:title7',
        symbol: 'x/2',
        background: '#E6B8B7',
    },
    {
        title: 'timeKeeping:timeSheetStatus:title8',
        symbol: 'Ro',
        background: '#B7DEE8',
    },
    {
        title: 'timeKeeping:timeSheetStatus:title9',
        symbol: 'B ',
        color: '#0D629F',
        background: '#fff',
    },
];
export const checkCEO = () => {
    let check = false;
    const useInfo = getUserInfo();
    if (!_.isEmpty(useInfo) && useInfo?.positionName === 'CEO') {
        check = true;
    }
    return check;
};
export const getDayInMonth = (month, dayOfWeek) => {
    // MM-YYYY, // 'Monday' || 'Tuesday' ||  'Wednesday' || 'Thursday' || 'Friday' || 'Saturday' || 'Sunday'
    const _month = moment(month, 'MM-YYYY').format('YYYY-MM');
    const _dayOfWeek = moment(_month).startOf('month').day(dayOfWeek);
    if (_dayOfWeek.date() > 7) _dayOfWeek.add(7, 'd');
    const listDay = [];
    while (_month === _dayOfWeek.format('YYYY-MM')) {
        listDay.push(_dayOfWeek.format('DDMMYYYY'));
        _dayOfWeek.add(7, 'd');
    }
    return listDay;
};
export const getUnique = (array) => {
    const uniqueArray = [];
    for (const value of array) {
        if (uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
};

export const getAllDayInRange = (fromDate, endDate) => {
    const _fromDate = moment(fromDate);
    const _endDate = moment(endDate);
    const dates = [];

    while (_fromDate.isSameOrBefore(_endDate)) {
        dates.push(_fromDate.format('YYYY-MM-DD'));
        _fromDate.add(1, 'd');
    }

    return dates;
};
export const getAllNormalDayInRange = (fromDate, endDate) => {
    const _fromDate = moment(fromDate);
    const _endDate = moment(endDate);
    const dates = [];

    while (_fromDate.isSameOrBefore(_endDate)) {
        if (moment(_fromDate).day() !== 0 && moment(_fromDate).day() !== 6) {
            dates.push(_fromDate.format('YYYY-MM-DD'));
        }
        _fromDate.add(1, 'd');
    }

    return dates;
};
export const checkTimeSheet = () => {
    const permissions = getPermission();

    const findHR = !_.isEmpty(permissions?.timeKeepingForHr);

    const findManager = !_.isEmpty(permissions?.timeKeepingForManager);

    if (findHR && findManager) return 'CEO';
    else if (findHR && !findManager) return 'HR';
    else if (!findHR && findManager) return 'Manager';
    else return 'User';
};
export const convertToListSelect = (listData) => {
    const newData = listData.map((item) => ({
        id: item._id,
        value: item._id,
        label: item?.branchName
    }));
    return newData;
};
const diffTimeHour = (startTime, endTime) => {
    const diffTime = moment(endTime).diff(startTime) / 3600000;
    return diffTime;
};

export const symbolWork = (timeCheckIn, timeCheckOut, option = {}) => {
    const restTimeStart = moment(option?.restTimeStartDefault || '12:00:00', 'HH:mm:ss');
    const restTimeEnd = moment(option?.restTimeEndDefault || '13:30:00', 'HH:mm:ss');
    let _hour;
    const startTime = moment(timeCheckIn, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:00');
    const endTime = moment(timeCheckOut, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:00');
    const _startTime = moment(startTime, 'HH:mm:ss');
    const _endTime = moment(endTime, 'HH:mm:ss');
    const _minuteBonus = option?.minuteBonus || 0;
    const hour = diffTimeHour(_startTime, _endTime);
    if (_startTime.isSameOrAfter(_endTime)) {
        return { stringSymbol: 'Ro', workTime: 0 };
    }
    if (_startTime.isSameOrBefore(restTimeStart) && _endTime.isSameOrAfter(restTimeEnd)) {
        _hour = hour - diffTimeHour(restTimeStart, restTimeEnd); // giờ khong tinh nghi trưa config
    } else if (_startTime.isSameOrAfter(restTimeStart) && _endTime.isSameOrBefore(restTimeEnd)) {
        _hour = 0;
    } else if (_startTime.isSameOrAfter(restTimeEnd) && _endTime.isSameOrAfter(restTimeEnd)) {
        _hour = diffTimeHour(_startTime, _endTime);
    } else if (_startTime.isSameOrBefore(restTimeStart) && _endTime.isSameOrBefore(restTimeStart)) {
        _hour = diffTimeHour(_startTime, _endTime);
    } else if (_startTime.isSameOrAfter(restTimeStart) && _startTime.isSameOrBefore(restTimeEnd) && _endTime.isSameOrAfter(restTimeEnd)) {
        _hour = diffTimeHour(restTimeEnd, _endTime);
    } else if (_startTime.isSameOrBefore(restTimeStart) && _endTime.isSameOrAfter(restTimeStart) && _endTime.isSameOrBefore(restTimeEnd)) {
        _hour = diffTimeHour(_startTime, restTimeStart);
    }
    _hour = diffTimeHour(_startTime, _endTime) > 3 ? (_hour + (_minuteBonus / 60)) : _hour;

    const isHoliday = option?.isHoliday;
    const isWeekend = option?.isWeekend;
    const isBOM = option?.isBOM;
    const isOffWork = option?.isOffWork; // nghi ca buoi
    const isHalfOffWork = option?.isHalfOffWork; // nghi nua buoi
    const timeLeave = option?.timeLeave; // công nghỉ nửa buổi
    const isMaternity = option?.isMaternity; // nghi thai san
    const isWorkLess = option?.isWorkLess; // lam 7h 1 ngay
    const isLeaveNoSalary = option?.isLeaveNoSalary; // nghi khong luong
    if (isWorkLess) _hour = _hour + 1; // ap dụng làm 7h
    if (isHalfOffWork) _hour = _hour + timeLeave; // nghi nửa phép todo
    const isAbsentLately = option?.isAbsentLately;

    let stringSymbol = 'Nothing';

    switch (true) {
    case isMaternity: // nghi thai san
        stringSymbol = ENUM_SYMBOL_TIME[700];
        break;
    case isLeaveNoSalary: // nghi k luong
        stringSymbol = '-';
        break;
    case isHoliday: // ngay lễ
        stringSymbol = ENUM_SYMBOL_TIME[600];
        break;
    case isWeekend: // ngay cuoi tuan
        stringSymbol = '-';
        break;
    case isBOM:
        stringSymbol = ENUM_SYMBOL_TIME[300];
        break;
    case isOffWork: // nghỉ full
        stringSymbol = ENUM_SYMBOL_TIME[500];
        break;
    case _hour < 3.5:
        stringSymbol = isHalfOffWork ? ENUM_SYMBOL_TIME[200] : ENUM_SYMBOL_TIME[100];
        break;
    case _hour < 7:
        if (isHalfOffWork) {
            stringSymbol = ENUM_SYMBOL_TIME[400];
            break;
        }
        if (isAbsentLately) {
            stringSymbol = (_hour + 1) >= 7 ? ENUM_SYMBOL_TIME[800] : ENUM_SYMBOL_TIME[200];
            break;
        }
        if (_hour >= 6 && _hour < 7) stringSymbol = ENUM_SYMBOL_TIME[900];
        if (_hour < 6) stringSymbol = ENUM_SYMBOL_TIME[200];
        break;
    case _hour < 8:
        if (isHalfOffWork) {
            stringSymbol = ENUM_SYMBOL_TIME[400];
            break;
        }
        if (isAbsentLately) {
            stringSymbol = (_hour + 1) >= 8 ? ENUM_SYMBOL_TIME[300] : ENUM_SYMBOL_TIME[800];
            break;
        }
        if (_hour >= 6 && _hour < 7) stringSymbol = ENUM_SYMBOL_TIME[900];
        if (_hour >= 7) stringSymbol = ENUM_SYMBOL_TIME[800];

        break;
    
    default:
        if (isHalfOffWork) {
            stringSymbol = ENUM_SYMBOL_TIME[400];
            break;
        }
        stringSymbol = ENUM_SYMBOL_TIME[300];
        break;
    }
    return { stringSymbol: stringSymbol, workTime: hour > 3 ? (_hour - (_minuteBonus / 60)) : _hour };
};

const compareDate = (hourLeave, countLeave) => {
    let symbolLeave = 'N/A';
    let countWork = 0;
    if (+hourLeave > 4.5) {
        countLeave = countLeave + 1;
        symbolLeave = 'P';
        countWork = 1;
    } else {
        countLeave = countLeave + 0.5;
        symbolLeave = 'P/2';
        countWork = 0.5;
    }
    return {
        countLeave,
        symbolLeave,
        countWork,
    };
};

const generateOfficialWorkHourInRange = (_startTime, _endTime, option = {}) => {
    // startTime: thời gian bắt đầu xin nghỉ  -> format: 'HH:mm:ss'
    // endTime: thời gian kết thúc xin nghỉ -> format: 'HH:mm:ss'
    // officialStart: thời gian vào làm việc chính thức -> format: 'HH:mm:ss'
    // officialEnd: thời gian nghỉ chính thức -> format: 'HH:mm:ss'
    // _restTimeStart: thời gian bắt đầu nghỉ trưa  -> format: 'HH:mm:ss'
    // _restTimeEnd: thời gian kết thúc nghỉ trưa   -> format: 'HH:mm:ss'

    const scheduleTimeKeeping = option?.configSchedule;

    const _restTimeStart = scheduleTimeKeeping?.restTimeStart || '12:00:00';
    const _restTimeEnd = scheduleTimeKeeping?.restTimeEnd || '13:30:00';

    const restTimeStart = moment(_restTimeStart, 'HH:mm:ss');
    const restTimeEnd = moment(_restTimeEnd, 'HH:mm:ss');

    const totalRestTime = diffTimeHour(restTimeStart, restTimeEnd); // Tổng thời gian nghỉ trưa

    const _officialStart = scheduleTimeKeeping?.timeStart || '08:30:00';
    const _officialEnd = scheduleTimeKeeping?.timeEnd || '18:00:00';

    const officialStart = moment(_officialStart, 'HH:mm:ss');
    const officialEnd = moment(_officialEnd, 'HH:mm:ss');

    const startTime = moment(_startTime, 'HH:mm:ss');
    const endTime = moment(_endTime, 'HH:mm:ss');
    let hour = 0;
    if (startTime.isSameOrBefore(officialStart) && endTime.isSameOrAfter(officialEnd)) {
        hour = diffTimeHour(officialStart, officialEnd) - totalRestTime;
    } else if (startTime.isSameOrAfter(officialStart) && endTime.isSameOrAfter(officialEnd)) {
        hour = diffTimeHour(startTime, officialEnd) - totalRestTime;
    } else if (startTime.isSameOrBefore(officialStart) && endTime.isSameOrBefore(officialEnd)) {
        hour = diffTimeHour(officialStart, endTime) - totalRestTime;
    } else if (startTime.isAfter(officialStart) && endTime.isBefore(officialEnd)) {
        hour = diffTimeHour(startTime, endTime) - totalRestTime;
    }
    return hour;
};

export const handleAttendance = (fromDate, endDate, config) => {
    try {
        const _fromDateLeave = moment(fromDate).format('YYYY-MM-DD');
        const _endDateLeave = moment(endDate).format('YYYY-MM-DD');
        const _absentDays = getAllNormalDayInRange(_fromDateLeave, _endDateLeave);
        let countLeave = 0;
        const absentDayDetail = [];
        if (_.isEmpty(_absentDays)) {
            return {
                absentDayDetail: [],
                countLeave: 0,
            };
        }

        let symbolLeave = 'N/A';
        let countWork = 0;
        const dataLeave = _absentDays.length;

        if (_fromDateLeave === _endDateLeave) {
            if (
                moment(fromDate).isBefore(`${_fromDateLeave} ${config.timeEnd}`)
                && moment(endDate).isAfter(`${_fromDateLeave} ${config.timeStart}`)
            ) {
                const _startTime = moment(fromDate, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:00');
                const _endTime = moment(endDate, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:00');
                const hourLeave = generateOfficialWorkHourInRange(_startTime, _endTime, { configSchedule: config });
                const getData = compareDate(hourLeave, countLeave);

                return {
                    absentDayDetail: [{
                        dateKeeping: _fromDateLeave,
                        countWork: getData.countWork,
                        symbolTemp: getData.symbolLeave,
                    }],
                    countLeave: getData.countLeave,
                };
            }
            return {
                absentDayDetail: [{
                    dateKeeping: _fromDateLeave,
                    countWork: 0,
                    symbolTemp: 'Ro',
                }],
                countLeave: 0,
            };
        }

        for (let index = 0; index < dataLeave; index++) {
            const leaveDay = _absentDays[index];
            let validDate = false;
            if (_fromDateLeave === leaveDay && moment(fromDate).isBefore(`${leaveDay} ${config.timeEnd}`)) {
                const _startTime = moment(fromDate, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:00');
                const hourLeave = generateOfficialWorkHourInRange(_startTime, config.timeEnd, { configSchedule: config });
                const getData = compareDate(hourLeave, countLeave);

                countWork = getData.countWork;
                symbolLeave = getData.symbolLeave;
                countLeave = getData.countLeave;
                validDate = true;
            }
            if (moment(leaveDay, 'YYYY-MM-DD').isAfter(_fromDateLeave) && moment(leaveDay, 'YYYY-MM-DD').isBefore(_endDateLeave)) {
                countLeave = countLeave + 1;
                countWork = 1;
                symbolLeave = 'P';
                validDate = true;
            }

            if (_endDateLeave === leaveDay && moment(endDate).isAfter(`${leaveDay} ${config.timeStart}`)) {
                const _endTime = moment(endDate, 'YYYY-MM-DD HH:mm:ss').format('HH:mm:00');
                const hourLeaveEnd = generateOfficialWorkHourInRange(config.timeStart, _endTime, { configSchedule: config });

                const getData = compareDate(hourLeaveEnd, countLeave);

                countWork = getData.countWork;
                symbolLeave = getData.symbolLeave;
                countLeave = getData.countLeave;
                validDate = true;
            }

            const obj = {
                dateKeeping: leaveDay,
                countWork,
                symbolTemp: symbolLeave,
            };
            if (validDate) absentDayDetail.push(obj);
        }

        return {
            absentDayDetail,
            countLeave: absentDayDetail.reduce((count, item) => count + +item?.countWork, 0),
        };
    } catch (error) {
        return error;
    }
};
export const socketConnect = () => {
    const dataToken = getToken();
    const socket = io(`${process.env.HTTP_SOCKET}://${process.env.URI_SOCKET}:${process.env.PORT_SOCKET}`, {
        transports: ['websocket', 'polling'],
        withCredentials: true,
        secure: true,
        query: {
            token: String(dataToken),
        },
    });
    console.log('socket connected', socket);
    return socket;
};