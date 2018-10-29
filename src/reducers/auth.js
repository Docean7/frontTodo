import { AUTHENTICATE } from "../constants/actionTypes";

const auth = (state = '', action) => {
  switch (action.type) {
      case AUTHENTICATE:
          return action.username;
      default: return state
  }
};

export default auth;