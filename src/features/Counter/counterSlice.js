import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state, actions) {
      return state + 1;
    },
    descrease(state, actions) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increase, descrease } = actions;
export default reducer;
