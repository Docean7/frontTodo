import { call, put, takeLatest } from 'redux-saga/effects';
import {REQUEST_SET_TODOS} from "../constants/actionTypes";
import {allTodosGet} from "../utils/api";
import {respondSetTodos} from "../actions";

function* handleSetTodos() {
    const { data } = yield call(allTodosGet);
    yield put(respondSetTodos(data))
}

function* setTodosWatcher() {
    yield takeLatest(REQUEST_SET_TODOS, handleSetTodos)
}

export default setTodosWatcher;