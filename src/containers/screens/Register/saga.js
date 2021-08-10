
import { put, takeLatest } from 'redux-saga/effects';
import { userSignup } from 'api/Signup';
import { REGISTER_REQUEST, REGISTER_SUCCESS , REGISTER_FAILURE } from './constants';

function* signupUser({ payload }) {
    try {
        const response = yield (userSignup(payload));
        yield put({ type: REGISTER_SUCCESS, response });
    } catch (error) {
        yield put({ type: REGISTER_FAILURE, error: error.message });
    }
}

export default function* signupScreenSaga() {
    yield takeLatest(REGISTER_REQUEST, signupUser);
}