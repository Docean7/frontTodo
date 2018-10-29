import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestAddTodo} from '../actions'



class AddTodo extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo({ text: this.textInput.value });
        this.textInput.value = ''
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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

const mapDispatchToProps = { addTodo: requestAddTodo };

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)