import "./Home.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "../MainPage/MainPage";
import { Link } from "react-router-dom";
import Na


function Home() {

  const developers = <p>{"{developers}"}</p>;
  return (

    <div>
        <NavBar />

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
            expand your knowledge in DSA
          </p>
          <button className="button">Get Started</button>
          {/* <Link to="/mainpage">Get Started</Link> */}
                  </div>
        <div className="saturn">
          <img src="assests/saturn.png" alt="" />
        </div>
        <div className="science">
            <img src="assests/science.png" alt="" />
        </div>
    </div>
    </div>
  );
}

export default Home;
