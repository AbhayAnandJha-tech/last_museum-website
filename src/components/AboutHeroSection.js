import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import "./AboutHeroSection.css";
import aboutheroimage from "../assets/bgimage/about.jpg";

const AboutHeroSection = () => {
  return (
    <div className="about-hero-section relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={aboutheroimage}
          alt="National Science Centre"
          className="w-full h-full object-cover about-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="about-hero-content"
        >
          <Typography
            variant="h2"
            className="about-hero-title mb-4 font-bold tracking-wide leading-tight"
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            className="about-hero-subtitle mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            At the National Science Centre, Delhi, we inspire the next
            generation of thinkers and innovators. Explore the fascinating world
            of science through interactive exhibits and immersive experiences
            that ignite curiosity and spark a passion for discovery.
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
