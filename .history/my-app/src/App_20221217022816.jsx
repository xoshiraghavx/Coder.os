import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="mainpage" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
}

export default App;
