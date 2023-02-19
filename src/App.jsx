import { useState } from "react";
import Logo from "./assets/images/logo.svg";
import Menu from "./assets/images/icon-menu.svg";
import CloseMenu from "./assets/images/icon-menu-close.svg";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container-logo">
          <img src={Logo} alt="" />
        </div>
        <nav aria-label="main navigation">
          <button
            className="btn btn-theme-control"
            aria-controls="main-nav"
            aria-expanded="false"
            onClick={console.log("open and close menu")}
          >
            <img className={`open`} src={Menu} alt="" />
            <img className={`close`} src={CloseMenu} alt="" />
          </button>
          <ul id="main-nav">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Trending</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
