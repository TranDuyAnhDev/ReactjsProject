
import { put,takeLatest,call,delay } from 'redux-saga/effects';
import { FETCH_LOGIN} from '@constants/login';
import { STATUS_CODE } from '@constants/index';
import { loginSuccess, loginFailed} from '@actions/login';
import { loginApi } from '@apis/login';
import { fetchError } from '@actions/common';

function* actionLogin(action) {
    try {
        const redicrectUrl = getRedirect();
        yield clearToken();
        if (redicrectUrl) {
            setRedirect(redicrectUrl);
        }
        const { payload, history } = action;
        const { params } = payload;
        const response = yield call(loginApi, params);
        const { status, data, serviceToken } = response;
        if (status === STATUS_CODE.SUCCESS && data.success === true) {
            console.log(listScreens,'listScreens');
        } else {
        }
    } catch (error) {
    }
}

export function* watchLogin() {
    yield takeLatest(FETCH_LOGIN, actionLogin);
}
