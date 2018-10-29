import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { REQUEST_LOGIN } from "../actions";



class Login extends Component {

    constructor(props) {
        super(props)
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = this.props.formData.values;
        this.props.requestLogin(data);
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

const mapStateToProps = state => ({ formData: state.form.loginForm });
const mapDispatchToProps = dispatch => ({
    requestLogin: data => dispatch(REQUEST_LOGIN(data))
});

export default reduxForm({form: 'loginForm'})(connect(mapStateToProps, mapDispatchToProps)(Login));