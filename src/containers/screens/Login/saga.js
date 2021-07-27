
import { put, takeLatest } from 'redux-saga/effects';
import { userLogin } from 'api/login';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

function* loginUser({ payload }) {
    try {
        const loginResponse = yield (userLogin(payload));
        yield put({ type: LOGIN_SUCCESS, loginResponse });
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, error: error });
    }
}

export default function* loginScreenSaga() {
    yield takeLatest(LOGIN_REQUEST, loginUser);
}