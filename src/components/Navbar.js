import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ handleLogout }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar mb-3 mt-0 pt-0">
        <Link to="/" className="navbar-logo mb-3 mx-6 pl-4" onClick={closeMobileMenu}>
          Zing
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-home" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
              Search
            </Link>
          </li>

          <li className="nav-item" style={{ cursor: "pointer" }}>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
            {/* <img
              alt="logout"
              onClick={handleLogout}
              src="https://img.icons8.com/flat-round/30/000000/back--v1.png"
            /> */}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
