
export const ADD_TODO = todo => ({ type: 'ADD_TODO', todo });

export const SET_TODOS = todos => ({ type: 'SET_TODOS', todos });

export const CHANGE_INPUT = input => ({ type: 'CHANGE_INPUT', input });

export const REQUEST_LOGIN = userdata => ({ type: 'REQUEST_LOGIN', userdata });

export const RESPOND_LOGIN = respond => ({ type: RESPOND_LOGIN, respond });

export const REJECT_LOGIN = err => ({ type: REJECT_LOGIN, err });