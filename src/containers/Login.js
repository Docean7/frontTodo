import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {setToken} from '../utils/tokenUtils';


class Login extends Component {

    constructor(props) {
        super(props)
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = this.props.formData.values;
        const { history } = this.props;
        axios({
            method: 'post',
            url: '/api/auth',
            data
        }).then(response => {
            setToken(response.data);
            history.push('/todo');
        })
            .catch(err => {
                alert('Wrong username or password');
            })
    };


    render() {
        return (
            <div>
                <Link to="/register">Sign Up</Link><br/>
                <form onSubmit={this.handleLoginSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field name="username" component="input"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'loginForm'})(withRouter(connect(state => ({ formData: state.form.loginForm }))(Login)));