import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="./home-banner-background.png" alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Finest Georgian Food Products
          </h1>
          <p className="primary-text">
          Georgian delights. Sauces, jams, and Halal wine. Capturing tradition and taste. 
          </p>
          <button className="secondary-button">
            View Products <FiArrowRight />{" "}
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
