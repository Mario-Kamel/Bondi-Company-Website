import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { Instagram } from "@mui/icons-material";
import strings from "../Assets/localization";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src="./Logo.png" alt="" />
        </div>
        <div className="footer-icons">
          <a href="tel:+201280991777">
            <SiWhatsapp href="tel:+201280991777"/>
          </a>
          <FaFacebookF />
          <Instagram />
        </div>
      </div>
      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div> */}
        <div className="footer-section-columns" id="contact">
          <span>(+2)0128-099-1777</span>
          <a href="mailto:contact@bondi.com">contact@bondi.com</a>
          <a href="mailto:medhat@bondi.com">medhatbekhit700@gmail.com</a>
          <a href="mailto:mahmoud@bondi.com">mahmoud@bondi.com</a>
        </div>
        <div className="footer-section-columns">
          <span>{strings.terms}</span>
          <span>{strings.privacy}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
