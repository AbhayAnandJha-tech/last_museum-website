import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import "./ContactHeroSection.css";
import Contact from "../pages/contact";
import contactHeroImage from "../assets/bgimage/Contact.jpg";

const ContactHeroSection = () => {
  return (
    <div className="contact-hero-section relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={contactHeroImage}
          alt="Contact Us Hero"
          className="w-full h-full object-cover contact-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-hero-content"
        >
          <Typography variant="h2" className="contact-hero-title mb-4">
            Get in Touch
          </Typography>
          <Typography variant="h6" className="contact-hero-subtitle mb-6">
            Have questions or need assistance? Connect with us at the National
            Science Centre, Delhi.
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
