import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Coachdost</h2>
      </div>
      <nav className="sidebar-menu">
        <Link to="/dashboard">
          <i className="fas fa-tachometer-alt"></i> <span>Dashboard</span>
        </Link>
        <Link to="/academics">
          <i className="fas fa-graduation-cap"></i> <span>Academics</span>
        </Link>
        <Link to="/accounts">
          <i className="fas fa-file-invoice-dollar"></i> <span>Accounts</span>
        </Link>
        <Link to="/support">
          <i className="fas fa-headset"></i> <span>Support</span>
        </Link>
        <Link to="/students">
          <i className="fas fa-user-graduate"></i> <span>Students</span>
        </Link>
        <Link to="/attendance">
          <i className="fas fa-calendar-check"></i> <span>Attendance</span>
        </Link>
        <Link to="/analytics">
          <i className="fas fa-chart-pie"></i> <span>Analytics</span>
        </Link>
        <Link to="/team">
          <i className="fas fa-users"></i> <span>Team</span>
        </Link>
        <Link to="/calendar">
          <i className="fas fa-calendar-alt"></i> <span>Calendar</span>
        </Link>
        <Link to="/leads">
          <i className="fas fa-clipboard-list"></i> <span>Leads</span>
        </Link>
        <Link to="/visitors">
          <i className="fas fa-address-book"></i> <span>Visitors</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
