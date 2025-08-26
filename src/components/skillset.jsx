import React from "react";
import skills from "./data/skills";
import "./skillset.css"

const Skills = () => {
  return (
      <>
      <div className="skillsrababu">
      <div className="skillhead">PROFESSIONAL <span style={{color: "#CD5FF8"}}>SKILLS</span></div>
        <div className="skillparent">
            {
              skills.map((skills, index) => (
                  <div className="mySkill">
                    {skills.name}
                  </div>
              ))
            }
        </div>
        </div>
      </>
  );
};

export default Skills;
