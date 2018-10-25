import React, {Component} from 'react';
import AddTodo from '../containers/AddTodo';
import List from '../containers/ListContainer';
import {removeToken} from "../utils/tokenUtils";
import {withRouter} from 'react-router';

class ToDo extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout = () => {
        const { history }  = this.props;
        removeToken();
        history.push('/');
    };

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}>Logout</button>
                <AddTodo/>
                <List/>
            </div>
        )
    }
}

export default withRouter(ToDo);