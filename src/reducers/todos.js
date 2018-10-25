const todos = (state = [], action) => {
  switch(action.type) {
      case 'ADD_TODO':
          return [
              ...state,
              {
                  id: action.id,
                  text: action.text,
                  completed: false
              }
          ];

      case 'SET_TODOS':
          return action.todos;

      default: return state;
  }
};
export default todos;