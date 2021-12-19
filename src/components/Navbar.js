import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../utils/images/knot-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} className="fa-typo3"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                STORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/images"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                IMAGES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/prewedding"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PRE-WEDDING
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
