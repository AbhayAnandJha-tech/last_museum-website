import React from "react";
import { Button, Typography, Container } from "@material-ui/core";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container>
        <Typography variant="h2" className="hero-title">
          Welcome to Our Museum
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Discover the wonders of science and history with us!
        </Typography>
        <Button variant="contained" color="primary" className="hero-button">
          Explore Now
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;
