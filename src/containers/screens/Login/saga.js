// import * as api from 'api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function* loginUser({ payload }) {
    try {
        let loginResponse
        // const loginResponse = yield call(api.login.userLogin, payload);
        yield put({ type: LOGIN_SUCCESS, loginResponse });
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, error: 'Something Went Wrong' });
    }
}

export default function* loginScreenSaga() {
    yield takeLatest(LOGIN_REQUEST, loginUser);
}