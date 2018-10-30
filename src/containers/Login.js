import React, { Component } from 'react';
import {compose} from "redux";
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {requestLogin} from "../actions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
};

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <TextField
        variant="outlined"
        hintText={label}
        label={label}
        errorText={touched && error}
        type={type}
        {...input}/>
);

class Login extends Component {

    handleSubmit = values => {
      const { history } = this.props;
      this.props.requestLogin(values, history);
    };

    render() {
        return (
            <>
                <Link to="/register">Sign Up</Link><br/><br/>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <Field name="username" type="text" label="username" component={renderField}/><br/><br/>
                    <Field name="password" type="password" label="password" component={renderField}/><br/><br/>
                    <Button variant="contained" color="primary" type="submit">Login</Button>
                </form>
                <Link to="/todo">Todo</Link>
            </>
        )
    }
}

const mapStateToProps = state => ({formData: state.form.loginForm});
const mapDispatchToProps = { requestLogin };

const withForm = reduxForm({form: 'loginForm', validate});

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
    withConnect,
    withRouter,
    withForm
)(Login);