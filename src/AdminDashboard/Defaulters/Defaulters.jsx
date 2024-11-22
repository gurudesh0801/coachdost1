import React from "react";
import "./Defaulters.css";

const Defaulters = () => {
  const defaulters = [
    { name: "Rahul Singh", issue: "Attendance", id: "3CO-JVY" },
    { name: "Rahul Singh", issue: "Fees", id: "3CO-JVY" },
    { name: "Rahul Singh", issue: "Mischief", id: "3CO-JVY" },
  ];

  return (
    <div className="defaulters">
      <h3>Defaulters</h3>
      <ul>
        {defaulters.map((defaulter, index) => (
          <li key={index}>
            <div className="defaulter-details">
              <strong>{defaulter.name}</strong>
              <p>{defaulter.issue}</p>
            </div>
            <span>{defaulter.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Defaulters;
