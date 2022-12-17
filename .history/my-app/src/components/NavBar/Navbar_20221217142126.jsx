import "./NavBar.css";

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
              <a>About</a>
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
