import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {CHANGE_INPUT} from "../actions";
import {Link} from "react-router-dom";
import {setToken} from '../utils/tokenUtils';
class Register extends Component {

    constructor(props) {
        super(props)
    }

    handleInputChange = (e) => {
        this.props.dispatch(CHANGE_INPUT({
            field: e.target.name,
            value: e.target.value
        }))
    };

    handleRegisterSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/api/register',
            data: this.props.formData
        }).then(response => {
            setToken(response.data);
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default connect(state => ({ formData: state.registerForm }))(Register);