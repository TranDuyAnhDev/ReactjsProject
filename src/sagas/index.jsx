import {
    fork, put, takeLatest,
} from 'redux-saga/effects';

/** login */
import { watchLogin } from './login';
import { fetchHideLoading } from '../actions/common';
function* rootSaga() {
    yield put(fetchHideLoading());
    yield fork(watchLogin);
}

export default rootSaga;
