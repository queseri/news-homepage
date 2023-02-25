import React from "react";

function Navigation({ menu }) {
  return (
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
  );
}

export default Navigation;
