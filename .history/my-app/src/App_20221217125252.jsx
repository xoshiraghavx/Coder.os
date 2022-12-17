import React from "react";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";
import {Routes, Route} Form ""

function App() {
  return (
    <div className="App">
      <Home />
      {/* <MainPage  /> */}
    </div>
      // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />}>
  //         <Route path="mainpage" element={<MainPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  );
}
import { Form } from "react-router-dom";

export default App;
