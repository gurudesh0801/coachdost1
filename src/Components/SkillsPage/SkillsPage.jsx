import React from "react";
import "./SkillsPage.css";
import img from "../../assets/images/image.png";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <div className="content">
        <div className="image-section">
          <img src={img} alt="Online Learning" className="laptop-image" />
        </div>
        <div className="text-section">
          <h1>We help students grow their skills</h1>
          <p>
            Advances that occur in the world of communication and information
            technology raise new opportunities and challenges in the world of
            education.
          </p>
          <div className="button-group">
            <button className="btn-primary">Join course</button>
            <button className="btn-secondary">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
