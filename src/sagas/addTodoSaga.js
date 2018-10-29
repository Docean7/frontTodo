import { call, put, takeLatest } from 'redux-saga/effects';
import {REQUEST_ADD_TODO} from "../constants/actionTypes";
import { addTodoPost } from "../utils/api";
import { respondAddTodo } from "../actions";

function* handleAddTodo({ todo }) {
    try {
        const { data } = yield call(addTodoPost, todo);
        yield put(respondAddTodo(data));
    } catch (err) {

    }

}

function* addTodoWatcher() {
    yield takeLatest(REQUEST_ADD_TODO, handleAddTodo)
}

export default addTodoWatcher;