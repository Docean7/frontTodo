import { call, put, takeLatest } from 'redux-saga/effects';
import { loginPost } from "../utils/api";
import {setToken} from '../utils/tokenUtils';
import {REQUEST_LOGIN} from "../constants/actionTypes";
import {authenticate} from "../actions";


function* handleLogin({ userdata, history }) {
    console.log(history);
    try {
        const { data } = yield call(loginPost, userdata);
        yield call(setToken, data.token);
        yield put(authenticate(data.username));
        //yield put(push('/todo'));
        yield call(history.push, '/todo')
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