import React from "react";
import "./ExhibitionsHeroSection.css";
import exhibitionsHeroImage from "../assets/bgimage/exhibitons.jpg";

const ExhibitionsHeroSection = () => {
  return (
    <div className="exhibitions-hero-section">
      <img
        src={exhibitionsHeroImage}
        alt="Exhibitions Section Hero"
        className="exhibitions-hero-bg"
      />
      <div className="exhibitions-hero-content">
        <h1>Exhibitions</h1>
        <p>Explore our captivating exhibitions that bring science to life.</p>
      </div>
    </div>
  );
};

export default ExhibitionsHeroSection;
