import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./HeroSection.css";
import heroBg from "../assets/bgvideo/heroBg.mp4";

// Define animation variants
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
    <div className="hero-section relative h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          src={heroBg}
          type="video/mp4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ duration: 1, delay: 0.5 }} // Adjust the timing as needed
        >
          <Typography
            variant="h2"
            className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Welcome to the Science Museum
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ duration: 1, delay: 0.8 }} // Slightly delay for subtitle
        >
          <Typography
            variant="h5"
            className="hero-subtitle text-lg sm:text-xl md:text-2xl mb-8"
          >
            Explore the intersection of science, technology, and creativity.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
          transition={{ duration: 1, delay: 1.2 }} // Delay for buttons
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/explore" className="hero-link">
            <Button
              variant="contained"
              className="hero-button bg-blue-600 text-white hover:bg-blue-500"
            >
              Explore Now
            </Button>
          </Link>
          <Link to="/learn-more" className="hero-link">
            <Button
              variant="outlined"
              className="hero-secondary-button border-white text-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
