import React from "react";
import "./ExploreHeroSection.css";
import exploreHeroImage from "../assets/bgimage/explore.jpg";

const ExploreHeroSection = () => {
  return (
    <div className="explore-hero-section">
      <img
        src={exploreHeroImage}
        alt="Explore Section Hero"
        className="explore-hero-bg"
      />
      <div className="explore-hero-content">
        <h1>Explore</h1>
        <p>
          Discover the wonders of science through hands-on exhibits and
          interactive displays.
        </p>
      </div>
    </div>
  );
};

export default ExploreHeroSection;
