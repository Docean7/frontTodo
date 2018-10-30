

const formReducerHW = (state = [], action) => {
  switch (action.type) {
      case 'CHANGE_INPUT':
        return {
            ...state,
            [action.input.field]: action.input.value
        };

      default: return state;
  }
};

export default formReducerHW;