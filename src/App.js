import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useStoreHook } from "store";
import "./App.css";
import productsApi from "./api/productApi";
import AlbumSong from "./features/Album";
import ToDoFeatue from "./features/Todo";
import UseEffectReact from "./features/UseEffectReact/index";
import { actions } from "store";
import TestFunction from "components/TestFunction/UseMemo";
import UseCallback from "components/TestFunction/UseCallback";
import UseMemo from "components/TestFunction/UseMemo";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      //Co the chuyen param cho get ALL
      const params = {
        _limit: 10,
      };
      const productList = await productsApi.getAll(params);
    };
    fetchProduct();
  }, []);
  const [count, setCount] = useState(0);

  // use Context tren f8
  const [state, dispatch] = useStoreHook();
  const { todos, todoInput } = state;
  console.log(todoInput);
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <CounterFeature /> */}
      {/** su dung memo
       * moi khi click increase component <Conten /> se luon bi render lai trong khi component nay k dung den count ,,,,,   dung memo() de khac phuc
       */}

      {/* sử dụng memo để tránh việc component re-render */}
      {/* <Content /> */}

      {/* SU DUNG CONTEXT VÀ REDUCER TRÊN F8 
          1. tạo folder src/sotre      
      */}
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
      <UseMemo />
      <UseCallback />
      <Routes>
        {/* <Route path="/" element={<CounterFeature />} /> */}
        <Route path="/effectReact" element={<UseEffectReact />} />
        <Route path="/todo" element={<ToDoFeatue />} />
        <Route path="/album" element={<AlbumSong />} />
      </Routes>
    </div>
  );
}

export default App;
