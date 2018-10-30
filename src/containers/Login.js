import React from 'react';
import {compose} from "redux";
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {requestLogin} from "../actions";


function Login(props) {
    return (
        <>
            <Link to="/register">Sign Up</Link><br/>
            <form onSubmit={props.handleSubmit}>
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
            <Link to="/todo">Todo</Link>
        </>
    )

}

const mapStateToProps = state => ({formData: state.form.loginForm});
const mapDispatchToProps = {onSubmit: requestLogin};

const withForm = reduxForm({form: 'loginForm'});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
    withForm
)(Login);