import { all, fork } from 'redux-saga/effects';
import loginScreenSaga from 'containers/screens/Login/saga';
import signupScreenSaga from 'containers/screens/Register/saga';

function* rootSaga() {
    yield all([
        loginScreenSaga(),
        signupScreenSaga()
      ])
}

export default rootSaga;