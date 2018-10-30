import axios from 'axios';
import {getToken} from "./tokenUtils";

export const loginPost = data => {
    return axios({
        method: 'post',
        url: '/api/auth',
        data
    })
};

export const addTodoPost = data => {
    return axios({
        method: 'post',
        url: '/api/addtodo',
        data,
        headers: {'Authorization': `bearer ${ getToken() }`}
    })
};

export const allTodosGet = () => {
    return axios({
        method: 'get',
        url: '/api/getall',
        headers: {'Authorization': `bearer ${ getToken() }`}
    })
};

export const registerPost = data => {
    return axios({
        method: 'post',
        url: '/api/register',
        data
    })
};


