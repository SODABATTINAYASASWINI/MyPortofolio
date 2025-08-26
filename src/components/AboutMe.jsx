import React from "react";
import "./AboutMe.css";
import mee from "../assets/images/mypic.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="aboutmehead" id="about">
        LET ME <span className="highlight">&nbsp;INTRODUCE</span>&nbsp; MYSELF
      </div>
      <div className="aboutparent">
        {/* Text Section */}
        <div className="myabout">
          <p>
            I’m <strong className="highlight">Yasaswini Sodabattina</strong>, a
            final-year B.Tech student at Aditya College of Engineering and
            Technology with a CGPA of 8.30.
          </p>
          <p>
            I'm fluent in programming languages like{" "}
            <strong className="highlight">C++</strong> and{" "}
            <strong className="highlight">Java</strong>.
          </p>
          <p>
            My interests lie in building scalable and modern{" "}
            <strong className="highlight">web applications</strong>, exploring
            new technologies, and solving real-world problems through code.
          </p>
          <p>
            I enjoy working with the{" "}
            <strong className="highlight">MERN stack</strong> — particularly{" "}
            <strong className="highlight">React.js</strong> for frontend and{" "}
            <strong className="highlight">Node.js + Express.js</strong> for
            backend development.
          </p>
          <p>
            As a <strong className="highlight">Female Techie</strong> in{" "}
            <strong className="highlight">
              Google Developer Groups (GDG)
            </strong>{" "}
            at ACET, I’ve actively contributed to organizing technical workshops
            and events for over 100 participants.
          </p>
        </div>

        {/* Image Section */}
        <div className="mypictureparent">
          <div className="mypic">
            <img src={mee} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
