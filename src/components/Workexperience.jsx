import React from "react";
import "./WorkExperience.css"; // ✅ Import the CSS file

const experiences = [
  {
    id: 1,
    role: "Female Techie (Frontend & Event Support)",
    company: "Google Developer Groups",
    duration: "Sep 2024 - May 2025",
    points: [
      "Contributed to community projects by building and improving web applications using React.js, HTML, CSS, and JavaScript.",
      "Assisted in organizing technical events with 100+ attendees, helping peers learn frontend and full-stack concepts.",
      "Collaborated with developers and designers to deliver responsive, user-friendly UIs.",
      "Guided juniors in understanding React basics and project structuring."
    ],
    logo: "🟢"
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "TechnicalHub",
    duration: "June 2024 - July 2024",
    points: [
      "Built reusable and responsive React components for real-time applications.",
      "Worked on API integration to fetch and manage data efficiently.",
      "Implemented modern UI/UX designs ensuring pixel-perfect alignment.",
      "Gained hands-on experience in version control (Git/GitHub) and collaborative coding."
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
