import { all } from 'redux-saga/effects';
import loginScreenSaga from '../screens/Login/saga';
import signupScreenSaga from '../screens/Register/saga';

function* rootSaga() {
    yield all([
        loginScreenSaga(),
        signupScreenSaga()
      ])
}

export default rootSaga;