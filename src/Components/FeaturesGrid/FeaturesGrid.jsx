import React from "react";
import "./FeaturesGrid.css";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Schedule Learning",
      description:
        "Learn at whatever and whenever at your suitable time and place.",
      isHighlighted: true,
    },
    {
      title: "Scholarship",
      description:
        "To encourage talent, we give up to 100% aid to those young learners.",
    },
    {
      title: "Course Accessibility",
      description:
        "Select a suitable course from the vast area of other courses.",
    },
    {
      title: "Practical Learning",
      description:
        "Select a suitable course from the vast area of other courses.",
    },
    {
      title: "Recorded Sessions",
      description:
        "Don’t worry about it, access to every session on the chosen course.",
    },
    {
      title: "Schedule Learning",
      description: "Hold the opportunity to learn from the industry’s expert.",
    },
  ];

  return (
    <div className="features-grid">
      <h2 className="features-heading">Why CoachDost?</h2>
      <div className="grid1">
        {features.map((feature, index) => (
          <div key={index} className={`grid-item`}>
            <div className="icon-circle"></div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
