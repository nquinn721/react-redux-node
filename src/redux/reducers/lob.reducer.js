const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOB_DATA_SUCCESS":
      return {
        ...state,
        ...action.data
      };
    default:
      return { ...state };
  }
};
