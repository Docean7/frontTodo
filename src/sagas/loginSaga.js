import { call, put, takeLatest } from 'redux-saga/effects';
import { loginPost, redirect } from "../utils/api";
import {setToken} from '../utils/tokenUtils';
import {REQUEST_LOGIN} from "../constants/actionTypes";
import {authenticate} from "../actions";

function* handleLogin({userdata}) {
    console.log(userdata)
    try {
        const { data } = yield call(loginPost, userdata);
        yield call(setToken, data.token);
        yield put(authenticate(data.username));
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