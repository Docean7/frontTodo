import {RESPOND_ADD_TODO, RESPOND_SET_TODOS} from "../constants/actionTypes";

const todos = (state = [], action) => {
  switch(action.type) {
      case RESPOND_ADD_TODO:
          return [
              ...state,
              action.todo
          ];

      case RESPOND_SET_TODOS:
          return action.todos;

      default: return state;
  }
};
export default todos;