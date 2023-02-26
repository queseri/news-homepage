import React from "react";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-menu.svg";
import CloseMenu from "../assets/images/icon-menu-close.svg";
import Navigation from "./Navigation";

function Header({ menu, handleMenu }) {
  return (
    <header className="header flex">
      <a href="#" className="btn-logo">
        <img src={Logo} alt="" />
        <span className="sr-only">Welcome to Web3 technologies</span>
      </a>
      <nav aria-label="main navigation" className="nav">
        <button
          className="flex btn btn-menu-control"
          aria-controls="main-nav"
          aria-expanded={`${menu ? true : false}`}
          onClick={handleMenu}
        >
          <span className="sr-only">main navigation control</span>
          <img className={`${menu ? "close-img" : ""}`} src={Menu} alt="" />
          <img
            className={`${menu ? "" : "close-img"}`}
            src={CloseMenu}
            alt=""
          />
        </button>
        <Navigation menu={menu} />
      </nav>
    </header>
  );
}

export default Header;
