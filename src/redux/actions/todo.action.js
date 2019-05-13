import Service from "./service";

export const getTodos = () => dispatch => {
  Service.get(dispatch, "todos", {
    init: "GET_TODOS",
    success: "GET_TODOS_SUCCESS",
    error: "GET_TODOS_FAILED"
  });
};
