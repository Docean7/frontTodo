import { all, fork } from 'redux-saga/effects';
import loginWatcher from './loginSaga';
import addTodoWatcher from "./addTodoSaga";
import setTodosWatcher from "./setTodosSaga";
import registrationWatcher from "./registerSaga";

export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(addTodoWatcher),
        fork(setTodosWatcher),
        fork(registrationWatcher)
    ])
}