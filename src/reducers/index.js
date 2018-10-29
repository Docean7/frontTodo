import { combineReducers } from 'redux';
import todos from './todos'
import registerForm from './formReducerHW';
import { reducer as loginFormReducer } from 'redux-form';
import username from './auth';

const todoApp = combineReducers({ todos, registerForm, form: loginFormReducer, username });

export default todoApp;