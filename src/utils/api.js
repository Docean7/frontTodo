import axios from 'axios';
import history from '../history';

export const loginPost = data => {
    return axios({
        method: 'post',
        url: '/api/auth',
        data
    })
};

export const redirect = route => history.push(route);
