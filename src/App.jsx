import { useState } from "react";
import Logo from "./assets/images/logo.svg";
import Menu from "./assets/images/icon-menu.svg";
import CloseMenu from "./assets/images/icon-menu-close.svg";
import Web3Mobile from "./assets/images/image-web-3-mobile.jpg";
import Web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import "./sass/main.scss";

function App() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(() => !menu);
  }
  return (
    <div className="app font-family">
      <div className={`overlay ${menu ? "show-overlay" : "" }`}></div>
      <header className="header flex">
        <div className="container-logo">
          <img src={Logo} alt="" />
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
              <a className="nav-link" href="">Home</a>
            </li>
            <li>
              <a className="nav-link" href="">New</a>
            </li>
            <li>
              <a className="nav-link" href="">Popular</a>
            </li>
            <li>
              <a className="nav-link" href="">Trending</a>
            </li>
            <li>
              <a className="nav-link" href="">Categories</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero">
          <div className="container-hero-img">
            <picture>
              <source media="(min-width: 45rem)" srcSet={Web3Desktop} />
              <img src={Web3Mobile} alt="" />
            </picture>
          </div>
          <div className="hero-content">
            <h1>The Bright Future of Web 3.0?</h1>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a className="nav-link" href=""  rel="noopener noreferrer">
              Read more
              <span className="sr-only">about web3 technology</span>
            </a>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
