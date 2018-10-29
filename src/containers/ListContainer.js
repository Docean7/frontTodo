import { connect } from 'react-redux';
import List from '../components/List';
import {requestSetTodos} from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = { requestSetTodos }

export default connect(mapStateToProps, mapDispatchToProps)(List)