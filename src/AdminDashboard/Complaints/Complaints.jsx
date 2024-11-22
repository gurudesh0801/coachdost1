import React from "react";
import "./Complaints.css";

const Complaints = () => {
  return (
    <div className="complaints">
      <h3>Complaints</h3>
      <div className="complaint-summary">
        <div className="complaint-box closed">
          <p>Closed</p>
          <strong>960</strong>
        </div>
        <div className="complaint-box open">
          <p>Open</p>
          <strong>50</strong>
        </div>
        <div className="complaint-box new">
          <p>New</p>
          <strong>50</strong>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
