import React, {Component} from 'react';
import AddTodo from '../containers/AddTodo';
import List from '../containers/ListContainer';
import {removeToken} from "../utils/tokenUtils";
import {withRouter} from 'react-router';
import { connect } from 'react-redux';

class ToDo extends Component {

    handleLogout = () => {
        const { history }  = this.props;
        removeToken();
        history.push('/');
    };

    render() {
        return (
            <>
                <p>Hello, {this.props.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
                <AddTodo/>
                <List/>
            </>
        )
    }
}
const mapStateToProps = state => ({ username: state.username });
export default withRouter(connect(mapStateToProps)(ToDo));