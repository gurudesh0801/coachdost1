import React from "react";
import "./HighestConversion.css";

const HighestConversion = () => {
  const data = {
    highest: { name: "Pooran Mal Yadav", leads: 565 },
    lowest: { name: "Virendra Singh Nathawwat", leads: 35 },
  };

  return (
    <div className="highest-conversion">
      <h3>Highest Conversion</h3>
      <div className="conversion-data">
        <div className="highest">
          <p>Highest:</p>
          <strong>{data.highest.name}</strong>
          <span>{data.highest.leads} Leads</span>
        </div>
        <div className="lowest">
          <p>Lowest:</p>
          <strong>{data.lowest.name}</strong>
          <span>{data.lowest.leads} Leads</span>
        </div>
      </div>
    </div>
  );
};

export default HighestConversion;
