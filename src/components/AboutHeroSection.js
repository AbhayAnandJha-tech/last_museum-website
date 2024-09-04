import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import "./AboutHeroSection.css";
import aboutheroimage from "/public/about.jpg";

const AboutHeroSection = () => {
  return (
    <div className="about-hero-section relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={aboutheroimage}
          alt="Science Museum Hero"
          className="w-full h-full object-cover about-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-hero-content"
        >
          <Typography variant="h2" className="about-hero-title mb-4">
            Discover Our Story
          </Typography>
          <Typography variant="h6" className="about-hero-subtitle mb-6">
            Journey through innovation and exploration at the National Science
            Centre, Delhi.
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
