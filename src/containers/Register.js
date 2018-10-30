import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeInput} from "../actions";
import {Link} from "react-router-dom";
import { requestRegistration } from "../actions";

class Register extends Component {

    handleInputChange = (e) => {
        this.props.changeInput({
            field: e.target.name,
            value: e.target.value
        })
    };

    handleRegisterSubmit = (e) => {
        e.preventDefault();
        this.props.requestRegistration(this.props.formData);
    };

    render() {
        return (
            <>
                <Link to="/">Login</Link><br/>
                <form onSubmit={this.handleRegisterSubmit}>
                    <label>
                        Username:
                        <input name="username" onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" onChange={this.handleInputChange} type="password"/>
                    </label>
                    <label>
                        Email:
                        <input name="email" onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" value="Register"/>
                </form>
                <Link to="/todo">Todo</Link>
            </>
        );
    }
}

const mapStateToProps = state => ({ formData: state.registerForm });
const mapDispatchToProps = { requestRegistration, changeInput };

export default connect(mapStateToProps, mapDispatchToProps)(Register);