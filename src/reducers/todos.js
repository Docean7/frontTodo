const todos = (state = [], action) => {
  switch(action.type) {
      case 'ADD_TODO':
          return [
              ...state,
              action.todo
          ];

      case 'SET_TODOS':
          return action.todos;

      default: return state;
  }
};
export default todos;