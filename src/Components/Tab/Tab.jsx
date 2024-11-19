// #THE QUICKEST AND MOST EFFECTIVE
import React, { useEffect, useRef, useState } from "react";
import "./Tab.css";
import img1 from "../../assets/images/img2.png";

const Tab = () => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  return (
    <div className="course-card2">
      <div className="course-content">
        <div className="card">
          <img
            src={img1}
            alt="Instructor"
            className={`card-image ${isVisible ? "slide-in" : ""}`}
            ref={imgRef}
          />
        </div>
        <div className="description">
          <h1>The quickest and effective way for learning</h1>
          <p>
            Discover a 24/7 accessible platform with experienced coaches to
            guide you every step of the way.
          </p>
          <div className="actions">
            <button className="btn join">Join course</button>
            <button className="btn read-more">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
