const initialState = {
  todos: [[]]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.data
      };
    default:
      return { ...state };
  }
};
