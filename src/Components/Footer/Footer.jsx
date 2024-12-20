import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import SMA from '../../images/footer/SMA.png';
import thames from '../../images/footer/Thames.png';
import UKCoach from '../../images/footer/UKCoach.png';
import ReviewsIO from "../../images/review01.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Site Map */}
        <div className="footer-column">
          <h4>Site Map</h4>
          <ul>
            <li><a href="#">Fleet</a></li>
            <li><a href="#">Areas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Things To Do</a></li>
          </ul>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Partners</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Health & Safety</a></li>
            <li><a href="#">Destinations Covered</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon" />
              <a href="#">Coach Specialist for London & UK</a>
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              <a href="tel:08007833243">Call us: 0800 783 3243</a>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <a href="mailto:sales@coachhire4u.com">Email us on: sales@coachhire4u.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Follow & Share */}
        <div className="footer-column">
          <h4>Follow & Share</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
          <div className="awards">
            <img src={SMA} alt="SMA National" />
            <img src={UKCoach} alt="UK Coach" />
            <img src={thames} alt="Times Valley Award" />
            <img src={ReviewsIO} alt="Review.io" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
