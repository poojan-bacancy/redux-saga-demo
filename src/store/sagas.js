import { fork } from 'redux-saga/effects';
import loginScreenSaga from 'containers/screens/Login/saga';

function* rootSaga() {
    yield fork(loginScreenSaga);
}

export default rootSaga;