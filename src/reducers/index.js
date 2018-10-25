import { combineReducers } from 'redux';
import todos from './todos'
import registerForm from './formReducerHW';
import { reducer as loginFormReducer } from 'redux-form';

const todoApp = combineReducers({ todos, registerForm, form: loginFormReducer });

export default todoApp;