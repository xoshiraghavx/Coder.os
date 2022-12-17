import React from "react";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Loading
    //  <Routes>
    //     <Route path="/" element={<Home />} />
    //       <Route path="/mainpage" element={<MainPage />} />
    //   </Routes>
  );
}

export default App;
