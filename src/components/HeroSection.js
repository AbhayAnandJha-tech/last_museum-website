import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroSection.css";
import heroBg from "../assets/bgvideo/heroBg.mp4";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function HeroSection() {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          src={heroBg}
          type="video/mp4"
          className="video-bg"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography variant="h2" className="hero-title">
            Welcome to the Science Museum
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Typography variant="h5" className="hero-subtitle">
            Explore the intersection of science, technology, and creativity.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
          transition={{ duration: 1, delay: 1.2 }}
          className="hero-buttons"
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
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
