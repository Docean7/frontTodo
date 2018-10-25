function handleChange(state, input) {
    switch (input.field) {
        case 'username':
            return {
                username: input.value,
                password: state.password,
                email: state.email
            };
        case 'password':
            return {
                username: state.username,
                password: input.value,
                email: state.email
            };
        case 'email':
            return {
                username: state.username,
                password: state.password,
                email: input.value
            };
        default: return state;
    }
}


const formReducerHW = (state = [], action) => {
  switch (action.type) {
      case 'CHANGE_INPUT':
        return handleChange(state, action.input);

      default: return state;
  }
};

export default formReducerHW;