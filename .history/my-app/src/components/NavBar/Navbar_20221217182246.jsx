import "./NavBar.css";
import { useNavigate } from "react-router-dom";


function NavBar() {
  const Router = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo" onClick={() => Router("/")}>
          <img src="assests/code-simple.svg" alt="" />
          {/* <img src="assests/yellow-logo.png" alt="" /> */}
          <div className="nav-bar-logo__name">Coder.os</div>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <><img src="assests/likedin.png" alt="" />
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
