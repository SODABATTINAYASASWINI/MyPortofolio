import React from "react";
import "./WorkExperience.css"; // ✅ Import the CSS file

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Google Developer Groups",
    duration: "Sep 2024 - May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
    logo: "🟢"
  },
  {
    id: 2,
    role: "Web Developer",
    company: "TechnicalHub",
    duration: "June 10 - July 25",
    points: [
      "Developing and maintaining mobile applications using React Native.",
      "Building reusable components for faster development.",
      "Integrating APIs and managing app state efficiently.",
      "Working closely with designers to ensure pixel-perfect UI."
    ],
    logo: "🟢"
  }
];

const WorkExperience = () => {
  return (
    <section className="work-section" id = "experience">
      <div className="work-container">
        <h2 className="work-title">
          <span>Work</span> Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              {/* Circle with logo */}
              <span className="timeline-logo">{exp.logo}</span>

              {/* Card */}
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
