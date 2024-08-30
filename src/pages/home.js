// Home.js
import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./home.css";

const exhibits = [
  {
    title: "Interactive Exhibits",
    description: "Engage with hands-on activities and interactive displays.",
    image: "https://th-i.thgim.com/public/migration_catalog/article16678947.ece/alternates/FREE_1200/india_gallery_nandi_statue",
    link: "/exhibits/interactive",
  },
  {
    title: "Educational Workshops",
    description: "Learn through our specially designed workshops for all ages.",
    image: "https://www.hlimg.com/images/stories/738X538/international-dolls-museum.jpg",
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
    <Container maxWidth="lg" className="home-container">
      <Typography variant="h2" className="home-title">
        Welcome to Our Museum
      </Typography>
      <Typography variant="h5" className="home-subtitle">
        Discover the wonders of science and technology
      </Typography>
      <Grid container spacing={3} className="home-grid">
        {exhibits.map((exhibit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="home-feature">
            <Link to={exhibit.link} className="feature-card">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Typography variant="h6" className="feature-title">
                      {exhibit.title}
                    </Typography>
                    <Typography className="feature-description">
                      {exhibit.description}
                    </Typography>
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="feature-image"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
