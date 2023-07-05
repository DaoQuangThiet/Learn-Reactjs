import { useContext } from "react";
import Context from "./Context";

{
  /*Custom hook, de xu ly viec import useContext va StoreProvider ở các component mỗi khi phải lấy state */
}

export const useStoreHook = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
  // co the viet return useContext(Context)
};
