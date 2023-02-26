import React from "react";
import Retros from "../assets/images/image-retro-pcs.jpg";
import TopLaptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
function Aside() {
  return (
    <aside className="aside">
      <ul className="aside-list">
        <li className="aside-item">
          <div className="aside-img-container">
            <img className="aside-img" src={Retros} alt="" />
          </div>
          <div className="aside-content">
            <span className="aside-item-num">01</span>
            <h2 className="aside-item-title">
              <a className="aside-item-link" href="">
                Reviving Retro PCs
              </a>
            </h2>
            <p className="aside-content-text">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </li>
        <li className="aside-item">
          <div className="aside-img-container">
            <img className="aside-img" src={TopLaptops} alt="" />
          </div>
          <div className="aside-content">
            <span className="aside-item-num">02</span>
            <h2 className="aside-item-title">
              <a className="aside-item-link" href="">
                Top 10 Laptops of 2022
              </a>
            </h2>
            <p className="aside-content-text">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </li>
        <li className="aside-item">
          <div className="aside-img-container">
            <img className="aside-img" src={Gaming} alt="" />
          </div>
          <div className="aside-content">
            <span className="aside-item-num">03</span>
            <h2 className="aside-item-title">
              <a className="aside-item-link" href="">
                The Growth of Gaming
              </a>
            </h2>
            <p className="aside-content-text">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
