import "./Home.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import React from "react";
import MainPage from "../MainPage/MainPage";

function Home() {
  const developers = <p>{"{developers}"}</p>;
  // const navigate = useNavigate();
  // const navigateToMainPage = () => {
  //   navigate('/MainPage');
  // };

  return (
    <div className="Home">
        <div className="heading">
          <h1>
            Powerful for <br />
            <div className="heading_">
              <span className="heading__" style={{ color: "#fffe7a" }}>
                {developers}
              </span>
              <span className="heading__">. Fast</span>
            </div>
            for everyone.
          </h1>
          <p className="heading-sub">
            A platform to help you enhance your skills,
            <br />
            expand your knowledge in DSA{" "}
          </p>
          <button className="button" onClick={navigateToMainPage}>Get started</button>
        </div>
        <div className="saturn">
          <img src="assests/saturn.png" alt="" />
        </div>
        <div className="science">
            <img src="assests/science.png" alt="" />
        </div>
        {/* <Routes>
          <Route path="/MainPage" element={<MainPage />} />
        </Routes> */}
    </div>
  );
}

export default Home;
