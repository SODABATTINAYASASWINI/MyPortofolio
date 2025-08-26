import React from "react";
import "./Footer.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        Designed and Developed by <span className="highlight">&nbsp;&nbsp;Yasaswini Sodabattina</span>
      </div>

      <div className="footer-center">
        Copyright © {new Date().getFullYear()} <span className="highlight">YS</span>
      </div>

      <div className="footer-right">
        <a href="https://github.com/SODABATTINAYASASWINI" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a> */}
        <a href="https://www.linkedin.com/in/yasaswini-sodabattina-b51607258/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yasaswinisodabattina/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
