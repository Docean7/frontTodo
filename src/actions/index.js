import {
    REQUEST_ADD_TODO,
    CHANGE_INPUT,
    REQUEST_LOGIN,
    REQUEST_SET_TODOS, RESPOND_ADD_TODO, RESPOND_SET_TODOS, AUTHENTICATE, REQUEST_REGISTRATION
} from "../constants/actionTypes";

export const requestAddTodo = todo => ({ type: REQUEST_ADD_TODO, todo });

export const respondAddTodo = todo => ({ type: RESPOND_ADD_TODO, todo });

export const requestSetTodos = () => ({ type: REQUEST_SET_TODOS });

export const respondSetTodos = todos => ({ type: RESPOND_SET_TODOS, todos });

export const changeInput = input => ({ type: CHANGE_INPUT, input });

export const requestLogin = (userdata, history) => ({ type: REQUEST_LOGIN, userdata, history });

export const authenticate = username => ({ type: AUTHENTICATE, username });

export const requestRegistration = userdata => ({ type: REQUEST_REGISTRATION, userdata });

