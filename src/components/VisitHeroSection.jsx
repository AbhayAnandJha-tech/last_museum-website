import React from "react";
import "./VisitHeroSection.css";
import visitHeroImage from "../assets/bgimage/visits.jpg";

const VisitHeroSection = () => {
  return (
    <div className="visit-hero-section">
      <img
        src={visitHeroImage}
        alt="Visit Section Hero"
        className="visit-hero-bg"
      />
      <div className="visit-hero-overlay"></div>
      <div className="visit-hero-content">
        <h1>Visit Us</h1>
        <p>
          Discover a world of science and wonder. Plan your visit and immerse
          yourself in our interactive exhibits and innovative programs designed
          to inspire all ages.
        </p>
      </div>
    </div>
  );
};

export default VisitHeroSection;
