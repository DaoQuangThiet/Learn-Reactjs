import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import logger from "./logger";

const { default: Context } = require("./Context");

const Provider = ({ children }) => {
  // Usereducer nhận 2 đối số, 1 là  reducer, 2 là giá trị khởi tạo
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export default Provider;
