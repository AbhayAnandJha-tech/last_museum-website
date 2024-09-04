import React from "react";
import "./exhibitions.css";
import ExhibitionsHeroSection from "../components/ExhibitionsHeroSection";

const Exhibitions = () => {
  return (
    <div>
      <ExhibitionsHeroSection />
      <div className="exhibitions-container">
        <div className="exhibitions-header">
          <h1>Our Exhibitions</h1>
          <p className="exhibitions-intro">
            Discover a world of science and innovation through our diverse range
            of exhibitions, each designed to inspire and educate visitors of all
            ages.
          </p>
        </div>

        <div className="exhibitions-gallery">
          <section className="exhibition-item">
            <img
              src="https://nscd.gov.in/wp-content/uploads/2024/01/MG_0469-scaled.jpg"
              alt="Water: The Elixir of Life"
              className="exhibition-image"
            />
            <div className="exhibition-info">
              <h2>Water: The Elixir of Life</h2>
              <p>
                Explore the importance of water through 34 interactive exhibits
                that highlight water's role on our planet and in our bodies.
                Learn about water conservation and its critical significance in
                our daily lives, especially in the context of Delhi's water
                challenges.
              </p>
            </div>
          </section>

          <section className="exhibition-item">
            <img
              src="https://nscd.gov.in/wp-content/uploads/2024/01/MG_0534-scaled.jpg"
              alt="Human Biology Gallery"
              className="exhibition-image"
            />
            <div className="exhibition-info">
              <h2>Human Biology</h2>
              <p>
                Dive into the fascinating world of human biology. This gallery
                covers all aspects of the human body—anatomical, physiological,
                biochemical, and more—demystifying the complex functions that
                keep us alive and healthy.
              </p>
            </div>
          </section>

          <section className="exhibition-item">
            <img
              src="https://nscd.gov.in/wp-content/uploads/2024/01/Vigyanoday-volum-three-Final-20-02-2020.jpg"
              alt="Science & Technology Heritage"
              className="exhibition-image"
            />
            <div className="exhibition-info">
              <h2>Science & Technology Heritage</h2>
              <p>
                Journey through India's rich history of scientific and
                technological innovation. From ancient astronomical observations
                to modern advancements in various fields, this gallery showcases
                the remarkable legacy of Indian science and technology.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
