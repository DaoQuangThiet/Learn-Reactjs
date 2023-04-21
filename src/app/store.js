import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/Counter/counterSlice";

const rootReducer = {
  count: reducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
