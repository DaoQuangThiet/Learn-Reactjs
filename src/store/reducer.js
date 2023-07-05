import { ADD_TODO, SET_TODO_INPUT } from "./constants";

{
  /*initialSta bang object de sau co the co nhieu state khac nhau */
}
const initState = {
  todos: [], // luu cac job
  todoInput: "", // khi go de luu 1 cong viec
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      throw new Error("Invalid Todo");
    // KHI XỬ LÝ LOGIC XONG THÌ SANG COMPONENT CẦN XỬ LÝ
  }
}

export { initState };
export default reducer;
