import React from "react";
import { Typography, Container, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container maxWidth="lg">
        <Box className="hero-content" textAlign="center">
          <Typography variant="h2" className="hero-title">
            Welcome to the Science Museum
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Explore the intersection of science, technology, and creativity.
          </Typography>
          <Box
            className="hero-buttons"
            display="flex"
            justifyContent="center"
            gap={2}
          >
            <Link to="/explore" className="hero-link">
              <Button variant="contained" className="hero-button">
                Explore Now
              </Button>
            </Link>
            <Link to="/learn-more" className="hero-link">
              <Button variant="outlined" className="hero-secondary-button">
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default HeroSection;
