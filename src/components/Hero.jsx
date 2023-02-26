import React from "react";
import Web3Mobile from "../assets/images/image-web-3-mobile.jpg";
import Web3Desktop from "../assets/images/image-web-3-desktop.jpg";
function Hero() {
  return (
    <div className="hero">
      <div className="container-hero-img">
        <picture>
          <source media="(min-width: 45rem)" srcSet={Web3Desktop} />
          <img src={Web3Mobile} alt="" aria-hidden={true} />
        </picture>
      </div>
      <div className="hero-content">
        <h1 className="main-title">The Bright Future of Web 3.0?</h1>
        <p className="main-text">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a className="btn-link" href="" rel="noopener noreferrer">
          Read more
          <span className="sr-only">about web3 technology</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
