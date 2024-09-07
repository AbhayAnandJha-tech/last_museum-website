import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import "./ContactHeroSection.css";
import contactHeroImage from "../assets/bgimage/Contact.jpg";

const ContactHeroSection = () => {
  return (
    <div className="contact-hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={contactHeroImage}
          alt="Contact Us Hero"
          className="contact-hero-bg"
        />
        <div className="contact-hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-hero-content"
        >
          <Typography variant="h2" className="contact-hero-title mb-4">
            Connect with Us
          </Typography>
          <Typography variant="h6" className="contact-hero-subtitle mb-6">
            Reach out to the National Science Centre, Delhi for all your queries
            and let’s explore the wonders of science together.
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
