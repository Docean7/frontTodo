import { connect } from 'react-redux';
import List from '../components/List';
import {SET_TODOS} from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
   setTodos: todos => dispatch(SET_TODOS(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(List)