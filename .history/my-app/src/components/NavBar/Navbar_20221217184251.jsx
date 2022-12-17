import "./NavBar.css";
import { useNavigate } from "react-router-dom";


function NavBar() {
  const Router = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo" onClick={() => Router("/")}>
          <img src="assests/code-simple.svg" alt="" />
          <div className="nav-bar-logo__name">Coder.os</div>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/oshiraghav/"><img src="assests/linkedin.png" alt="" /></a>
            </li>
            <li>
              <a href="https://github.com/xoshiraghavx"><img src="assests/github.png" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
