import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import strings from "../Assets/localization";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src="./about-background.png" alt="" />
      </div>
      <div className="about-section-image-container">
        <img src="./about_3_products.png" alt="" />
      </div>
      <div className="about-section-text-container"> 
        <p className="primary-subheading">{strings.about}</p>
        <h1 className="primary-heading">
          {strings.aboutHeading}
        </h1>
        <p className="primary-text">
          {strings.aboutText}
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">{strings.learnMore}</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> {strings.watchVideo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
