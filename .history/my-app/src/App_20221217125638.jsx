import React from "react";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    
     <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/mainpage" element={<MainPage />} />
        </Route>
      </Routes>
  );
}
import { Form } from "react-router-dom";

export default App;
