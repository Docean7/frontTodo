import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function List(props) {

    useEffect(() => {
        props.requestSetTodos()
    }, []);

    return (
        <div>
            <ul>
                {props.todos.map(task =>
                    <li key={task.id}>{task.text}</li>
                )}
            </ul>
        </div>
    )

}

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default List;