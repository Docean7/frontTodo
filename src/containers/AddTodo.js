import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD_TODO} from '../actions'
import axios from "axios";
import {getToken} from "../utils/tokenUtils";


class AddTodo extends Component {

    handleSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/api/addtodo',
            data: { text: this.textInput.value },
            headers: {'Authorization': `bearer ${ getToken() }`}
        }).then(response => this.props.addTodo(response.data))
            .catch(err => {
                console.log(err);
            });
        this.textInput.value = ''
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*Просто смотрю как работают рефы*/}
                    <input ref={node => this.textInput = node}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(ADD_TODO(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)