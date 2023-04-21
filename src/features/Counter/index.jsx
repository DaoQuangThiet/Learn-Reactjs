import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { descrease, increase } from "./counterSlice";
const CounterFeature = (props) => {
  const dispath = useDispatch(); // để gửi action lên
  // Lay state tu redux
  const count = useSelector((state) => state.count);
  const handleIncreaseClick = () => {
    const actions = increase();
    dispath(actions);
  };
  const handleDecreaseClick = () => {
    const actions = descrease();
    dispath(actions);
  };
  return (
    <div>
      Counter :{count}
      <div>
        <button onClick={handleIncreaseClick}>+++++</button>
        <button onClick={handleDecreaseClick}>----</button>
      </div>
    </div>
  );
};
export default CounterFeature;
