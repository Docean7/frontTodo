import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_LOGIN } from "../actions";
import { loginPost, redirect } from "../utils/api";
import {setToken} from '../utils/tokenUtils';

function* handleLogin({userdata}) {
    try {
        const {token} = yield call(loginPost, userdata);
        yield call(setToken, token);
        console.log('redirecting');
        yield call(redirect, '/todo');
    } catch (err) {
        const loginError = err.response.data.message;
        console.log(loginError);
        //TODO
    }
}

function* loginWatcher() {
    yield takeLatest(REQUEST_LOGIN, handleLogin)
}

export default loginWatcher;