import React from "react";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <NavBar />
    
  <BrowserRouter>
      <Routes>
          <Route path="mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;
