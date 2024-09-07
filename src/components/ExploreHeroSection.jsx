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
      <div className="explore-hero-overlay"></div>
      <div className="explore-hero-content">
        <h1>Explore the Unseen</h1>
        <p>
          Dive into a world of discovery. From the mysteries of the cosmos to
          the marvels of modern science, your adventure starts here.
        </p>
      </div>
    </div>
  );
};

export default ExploreHeroSection;
