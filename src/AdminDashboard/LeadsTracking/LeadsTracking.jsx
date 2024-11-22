import React from "react";
import "./LeadsTracking.css";

const LeadsTracking = () => {
  return (
    <div className="leads-tracking">
      <h3>Leads Tracking</h3>
      <div className="leads-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "70%" }}></div>
        </div>
        <p>70.04%</p>
      </div>
      <div className="leads-stats">
        <div>
          <p>Total Leads:</p>
          <strong>6579</strong>
        </div>
        <div>
          <p>Converted Leads:</p>
          <strong>650</strong>
        </div>
        <div>
          <p>Assigned Leads:</p>
          <strong>650</strong>
        </div>
        <div>
          <p>Unassigned Leads:</p>
          <strong>650</strong>
        </div>
        <div>
          <p>Dropped Leads:</p>
          <strong>650</strong>
        </div>
      </div>
    </div>
  );
};

export default LeadsTracking;
