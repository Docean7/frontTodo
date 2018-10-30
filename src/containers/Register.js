import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeInput} from "../actions";
import {Link} from "react-router-dom";
import { requestRegistration } from "../actions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                <Link to="/">Login</Link><br/><br/>
                <form onSubmit={this.handleRegisterSubmit}>
                    <TextField
                        variant="outlined"
                        hintText="username"
                        name="username"
                        label="username"
                        onChange={this.handleInputChange}/>

                    <TextField
                        variant="outlined"
                        hintText="password"
                        name="password"
                        label="password"
                        onChange={this.handleInputChange}
                        type="password"/>

                    <TextField
                        variant="outlined"
                        hintText="email"
                        name="email"
                        label="email"
                        onChange={this.handleInputChange}
                        type="email"/>
                    <br/><br/>
                    <Button variant="contained" color="primary" type="submit">Register</Button>
                </form><br/>
                <Link to="/todo">Todo</Link>
            </>
        );
    }
}

const mapStateToProps = state => ({ formData: state.registerForm });
const mapDispatchToProps = { requestRegistration, changeInput };

export default connect(mapStateToProps, mapDispatchToProps)(Register);