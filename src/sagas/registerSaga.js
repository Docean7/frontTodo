import { call, put, takeLatest } from "redux-saga/effects";
import { redirect, registerPost } from "../utils/api";
import { setToken } from "../utils/tokenUtils";
import { authenticate } from "../actions";
import { REQUEST_REGISTRATION } from "../constants/actionTypes";

function* handleRegistration({userdata}) {
    try {
        const { data } = yield call(registerPost, userdata);
        yield call(setToken, data.token);
        yield put(authenticate(data.username));
        yield call(redirect, '/todo');
    } catch (err) {
        const loginError = err.response.data.message;
        console.log(loginError);
        //TODO
    }
}

function* registrationWatcher() {
    yield takeLatest(REQUEST_REGISTRATION, handleRegistration)
}

export default registrationWatcher;