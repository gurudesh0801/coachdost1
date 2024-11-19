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
            In a world shaped by rapid advances in communication and technology,
            new opportunities are everywhere. At Coach Dost, we turn challenges
            into stepping stones, empowering students to thrive in an
            ever-changing educational landscape.
          </p>
          <div className="button-group">
            <button className="btn-primary">Join Now</button>
            <button className="btn-secondary">Explore Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
