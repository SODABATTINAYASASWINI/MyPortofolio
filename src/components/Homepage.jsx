import React from "react";
import "./Homepage.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="parent" id="home">
      <div className="overlay"></div>
      <div className="myheadingsparent">
        <div className="one">Hello,</div>
        <div className="two">
          This is <span className="highlight">YASASWINI SODABATTINA</span>,
        </div>
        <div className="three">I'm a Full Stack Developer</div>
      </div>

      <div className="parenticons">
        <a
          href="https://github.com/SODABATTINAYASASWINI"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yasaswini-sodabattina-b51607258/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/SodabattinaYasaswini/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>

      <div className="buttonscoloumn">
        <button className="resumebut">Resume</button>
        <button className="contactbut"><a href="#contact">Contact</a></button>
      </div>
    </div>
  );
};

export default HomePage;
