// #THE QUICKEST AND MOST EFFECTIVE
import React from "react";
import "./Tab.css";
import img1 from "../../assets/images/img2.png";

const Tab = () => {
  return (
    <div className="course-card">
      <div className="course-content">
        <div className="card">
          <img src={img1} alt="Instructor" className="card-image" />
        </div>
        <div className="description">
          <h1>The quickest and effective way for learning</h1>
          <p>
            With online learning, interactions between teachers and students
            will be more practical because they do not have to travel to meet.
          </p>
          <div className="actions">
            <button className="btn join">Join course</button>
            <button className="btn read-more">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
