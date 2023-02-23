import { useState, useEffect } from "react";
import Logo from "./assets/images/logo.svg";
import Menu from "./assets/images/icon-menu.svg";
import CloseMenu from "./assets/images/icon-menu-close.svg";
import Web3Mobile from "./assets/images/image-web-3-mobile.jpg";
import Web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import Retros from "./assets/images/image-retro-pcs.jpg";
import TopLaptops from "./assets/images/image-top-laptops.jpg";
import Gaming from "./assets/images/image-gaming-growth.jpg";
import "./sass/main.scss";

function App() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(() => !menu);
  }

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-y");
    } else {
      document.body.classList.remove("overflow-y");
    }
  }, [menu]);

  return (
    <div className="app font-family">    
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
            <a className="btn-link" href="" rel="noopener noreferrer">
              Read more
              <span className="sr-only">about web3 technology</span>
            </a>
          </div>
        </div>
        <article className="new-articles">
          <h2>New</h2>
          <div className="articles">
            <div className="article">
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="article">
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="article">
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </article>
      </main>
      <footer>
        <ul>
          <li className="footer-item">
            <div className="footer-img">
              <img src={Retros} alt="" />
            </div>
            <div className="footer-content">
              <h2>
                <a href="">Reviving Retro PCs</a>
              </h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </li>
          <li className="footer-item">
            <div className="footer-img">
              <img src={TopLaptops} alt="" />
            </div>
            <div className="footer-content">
              <h2>
                <a href="">Top 10 Laptops of 2022</a>
              </h2>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </li>
          <li className="footer-item">
            <div className="footer-img">
              <img src={Gaming} alt="" />
            </div>
            <div className="footer-content">
              <h2>
                <a href="">The Growth of Gaming</a>
              </h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
