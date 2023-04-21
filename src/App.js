import Header from "components/Header";
import CounterFeature from "features/Counter";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import productsApi from "./api/productApi";
import "./App.css";
import AlbumSong from "./features/Album";
import ToDoFeatue from "./features/Todo";

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
  return (
    <div className="App">
      <Header />
      {/* <CounterFeature /> */}
      <Routes>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/todo" element={<ToDoFeatue />} />
        <Route path="/album" element={<AlbumSong />} />
      </Routes>
    </div>
  );
}

export default App;
