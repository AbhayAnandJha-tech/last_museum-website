import React from "react";
import "./ExhibitionsHeroSection.css";
import exhibitionsHeroImage from "../assets/bgimage/exhibitons.jpg";

const ExhibitionsHeroSection = () => {
  return (
    <div className="exhibitions-hero-section">
      <div className="exhibitions-hero-overlay"></div>
      <img
        src={exhibitionsHeroImage}
        alt="Exhibitions Section Hero"
        className="exhibitions-hero-bg"
      />
      <div className="exhibitions-hero-content">
        <h1>Exhibitions</h1>
        <p>
          Immerse yourself in our engaging exhibitions that inspire and educate.
        </p>
      </div>
    </div>
  );
};

export default ExhibitionsHeroSection;
