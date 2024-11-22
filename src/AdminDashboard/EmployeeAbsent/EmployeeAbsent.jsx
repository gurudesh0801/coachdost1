import React from "react";
import "./EmployeeAbsent.css";

const EmployeeAbsent = () => {
  const employees = [
    { name: "Prasad Deshpande", role: "Content Curator" },
    { name: "Yash Bhosale", role: "Content Curator" },
    { name: "Aryan Patil", role: "Content Curator" },
    { name: "Tina", role: "Content Curator" },
  ];

  return (
    <div className="employee-absent">
      <h3>Employees Absent</h3>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>{employee.name}</strong>
            <p>{employee.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeAbsent;
