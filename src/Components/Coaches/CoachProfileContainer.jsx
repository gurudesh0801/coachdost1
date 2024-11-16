import React, { useState } from "react";
import CoachSidebar from "./CoachSidebar";
import "./CoachProfileContainer.css";
import img1 from "../../assets/images/img2.png";
import img2 from "../../assets/images/slider_img2.jpg";
import img3 from "../../assets/images/slider_img3.jpg";
import img4 from "../../assets/images/slider_img4.jpg";
import img5 from "../../assets/images/slider_img5.jpg";
import img6 from "../../assets/images/slider_img6.jpg";
import img7 from "../../assets/images/slider_img7.jpg";

const coaches = [
  {
    id: 1,
    name: "Emily Johnson",
    date: "1h ago",
    img: img1,
  },
  { id: 2, name: "Ryan Moore", date: "29 Jun", img: img2 },
  { id: 3, name: "David Garcia", date: "29 Jun", img: img3 },
  { id: 4, name: "David Garcia2", date: "29 Jun", img: img4 },
  { id: 5, name: "David Garcia3", date: "29 Jun", img: img5 },
  { id: 6, name: "David Garcia4", date: "29 Jun", img: img6 },
  { id: 7, name: "David Garcia5", date: "29 Jun", img: img7 },
  // Add more profiles as needed
];

export default function CoachProfileContainer() {
  const [selectedCoach, setSelectedCoach] = useState(coaches[0]);

  return (
    <>
      <div className="coach-profile-container">
        <img src={img1} alt="" />
      </div>
    </>
  );
}
