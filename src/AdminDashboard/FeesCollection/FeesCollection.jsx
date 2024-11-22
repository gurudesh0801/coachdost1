import React from "react";
import "./FeesCollection.css";

const FeesCollection = () => {
  return (
    <div className="fees-collection">
      <h3>Today's Fees Collection: ₹ 14,00,00,000</h3>
      <div className="fees-details">
        <p>
          Total Fees Collected: <strong>₹ 7,50,00,000</strong>
        </p>
        <p>
          Total Fees Outstanding: <strong>₹ 7,50,00,000</strong>
        </p>
      </div>
    </div>
  );
};

export default FeesCollection;
