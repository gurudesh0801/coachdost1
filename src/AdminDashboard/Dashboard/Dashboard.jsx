import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import FeesCollection from "../FeesCollection/FeesCollection";
import Complaints from "../Complaints/Complaints";
import "./Dashboard.css";
import LeadsTracking from "../LeadsTracking/LeadsTracking";
import EmployeeAbsent from "../EmployeeAbsent/EmployeeAbsent";
import Defaulters from "../Defaulters/Defaulters";
import HighestConversion from "../HighestConversion/HighestConversion";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="main-container">
        <div className="dashboard-container">
          <FeesCollection />
          <Complaints />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
          className="down-sec"
        >
          <LeadsTracking />
          <EmployeeAbsent />
          <Defaulters />
        </div>
        <HighestConversion />
      </div>
    </div>
  );
};

export default Dashboard;
