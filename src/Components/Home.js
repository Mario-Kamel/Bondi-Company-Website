import React from "react";
import { FiArrowRight } from "react-icons/fi";
import strings from "../Assets/localization";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="./home-banner-background.png" alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            {strings.homeBannerText}
          </h1>
          <p className="primary-text">
          {strings.homeBannerSubText} 
          </p>
          <button className="secondary-button">
            <a href="/products">
              {strings.viewProducts} <FiArrowRight />
            </a>
          </button>
        </div>
        <div className="home-image-section">
          <img src="./3_sauces.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
