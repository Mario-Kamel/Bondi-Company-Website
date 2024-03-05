import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Discover how Bondi brings the flavors of Georgian cuisine to the Gulf region
        </h1>
        <p className="primary-text">
        Explore the rich tapestry of Georgian culinary traditions as Bondi brings you a delightful array of handcrafted sauces, tantalizing jams, and exquisite Halal wine. From the sun-kissed vineyards to your table, savor the essence of Georgia’s vibrant flavors right here in the heart of the Gulf. Whether you’re a connoisseur or a curious food enthusiast, Bondi invites you to experience the magic of Georgian cuisine—one delectable bite at a time. 🍯🍷🌟
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
