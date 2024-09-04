import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import HeroSection from "../components/HeroSection";

const exhibits = [
  {
    title: "Interactive Exhibits",
    description: "Engage with hands-on activities and interactive displays.",
    image:
      "https://th-i.thgim.com/public/migration_catalog/article16678947.ece/alternates/FREE_1200/india_gallery_nandi_statue",
    link: "/exhibits/interactive",
  },
  {
    title: "Educational Workshops",
    description: "Learn through our specially designed workshops for all ages.",
    image:
      "https://www.hlimg.com/images/stories/738X538/international-dolls-museum.jpg",
    link: "/exhibits/workshops",
  },
  {
    title: "Guided Tours",
    description: "Explore with expert guides who bring exhibits to life.",
    image:
      "https://media.assettype.com/homegrown%2Fimport%2Fbook%2F12002-fdjercjkjj-1585903159.jpeg",
    link: "/exhibits/tours",
  },
];

function Home() {
  return (
    <div>
      {" "}
      <HeroSection />
      <div className="home-container">
        <h1 className="home-title">
          Discover the Wonders of Science and Technology
        </h1>
        <div className="home-grid">
          {exhibits.map((exhibit, index) => (
            <Link to={exhibit.link} key={index} className="feature-card">
              <div className="exhibit-card">
                <div className="exhibit-front">
                  <h3 className="feature-title">{exhibit.title}</h3>
                  <p className="feature-description">{exhibit.description}</p>
                </div>
                <div className="exhibit-back">
                  <div className="exhibit-image-container">
                    <img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="exhibit-image"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="explore-more">
          <h2>Embark on a Journey of Discovery</h2>
          <p>Uncover the mysteries of the universe, one exhibit at a time.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
