import React from "react";
import "./Explore.css";
import ExploreHeroSection from "../components/ExploreHeroSection";

const Explore = () => {
  return (
    <div>
      <ExploreHeroSection />
      <div className="explore-container">
        <header className="explore-header">
          <h2>Explore the Museum</h2>
        </header>
        <section className="museum-map-section">
          <div className="museum-map">
            <img
              src="https://www.mori.art.museum/english/contents/universe_art/img/map/img_map.png"
              alt="Museum Map"
            />
          </div>
        </section>
        <section className="image-grid-section">
          <div className="image-grid">
            <div className="image-container">
              <img
                src="https://hk.science.museum/image/Exhibition/Special-Exhibition/2022/Shaw-Prize-2022/exhib3.jpg"
                alt="Hall 1"
              />
              <div className="image-text">
                <h3>Hall 1</h3>
                <p>
                  Explore the ancient artifacts in Hall 1, featuring relics from
                  Egypt and Greece.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://townsquaredelaware.com/wp-content/uploads/2022/05/kidinmuseum.jpg"
                alt="World of Dinosaurs"
              />
              <div className="image-text">
                <h3>World of Dinosaurs</h3>
                <p>
                  Discover the wonders of the natural world in Hall 2, featuring
                  dinosaur fossils and more.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img
                src="http://www.rscguwahati.gov.in/images/cafeteria_s.jpg"
                alt="Cafeteria"
              />
              <div className="image-text">
                <h3>Cafeteria</h3>
                <p>
                  The Riverview Café powers the Museum of Science and our
                  visitors seven days a week with a wide selection of delicious
                  food and beverage options.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://i.pinimg.com/originals/63/cf/e7/63cfe7624cb899bd7115b2c73c4f794b.jpg"
                alt="Exhibit B"
              />
              <div className="image-text">
                <h3>Exhibit B</h3>
                <p>
                  Explore the world of science and technology in Exhibit B,
                  featuring interactive exhibits and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
