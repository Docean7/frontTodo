import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {getToken} from "../utils/tokenUtils";


class List extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: '/api/getall',
            headers: {'Authorization': `bearer ${ getToken() }`}
        }).then(response => this.props.setTodos(response.data))
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.todos.map(task =>
                        <li key={task.id}>{task.text}</li>
                    )}
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default List;