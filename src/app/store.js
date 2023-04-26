import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/Counter/counterSlice";
import userReducer from "../features/Auth/userSlice";

const rootReducer = {
  count: reducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
