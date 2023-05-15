import Header from "components/Header";
import Content from "Content";
import CounterFeature from "features/Counter";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import productsApi from "./api/productApi";
import "./App.css";
import AlbumSong from "./features/Album";
import ToDoFeatue from "./features/Todo";
import UseEffectReact from "./features/UseEffectReact/index";

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
  return (
    <div className="App">
      <Header />
      {/* <CounterFeature /> */}
      {/** su dung memo
       * moi khi click increase component <Conten /> se luon bi render lai trong khi component nay k dung den count ,,,,,   dung memo() de khac phuc
       */}

      {/* sử dụng memo để tránh việc component re-render */}
      <Content />

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
