import React from "react";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;
