import { all, fork } from 'redux-saga/effects';
import loginWatcher from './loginSaga';

export default function* rootSaga() {
    yield all([
        fork(loginWatcher)
    ])
}