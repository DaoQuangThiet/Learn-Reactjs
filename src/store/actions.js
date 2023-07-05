import { ADD_TODO, SET_TODO_INPUT } from "./constants";
{
  /*Them action */
  /*Thêm action ở đây sau đó sang rudecer xử lý */
}
export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
