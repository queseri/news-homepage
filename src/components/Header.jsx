import React from "react";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-menu.svg";
import CloseMenu from "../assets/images/icon-menu-close.svg";

function Header({ menu, handleMenu }) {
  return (
    <header className="header flex">
      <div className="container-logo">
        <img src={Logo} alt="Welcome to Web3 technologies" />
      </div>
      <nav aria-label="main navigation" className="nav">
        <button
          className="flex btn btn-menu-control"
          aria-controls="main-nav"
          aria-expanded={`${menu ? true : false}`}
          onClick={handleMenu}
        >
          <img className={`${menu ? "close-img" : ""}`} src={Menu} alt="" />
          <img
            className={`${menu ? "" : "close-img"}`}
            src={CloseMenu}
            alt=""
          />
        </button>

        <ul id="main-nav" className={`main-nav ${menu ? "show-nav" : ""}`}>
          <li>
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              New
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              Popular
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              Trending
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
