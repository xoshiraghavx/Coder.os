import React from "react";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <MainPage  />
    </div>
  );
}

export default App;
