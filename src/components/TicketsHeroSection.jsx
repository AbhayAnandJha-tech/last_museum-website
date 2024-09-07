import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import "./TicketsHeroSection.css";
import ticketsHeroImage from "../assets/bgimage/tickets.jpg";

const TicketsHeroSection = () => {
  return (
    <div className="tickets-hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={ticketsHeroImage}
          alt="Tickets Section Hero"
          className="tickets-hero-bg"
        />
        <div className="tickets-hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tickets-hero-content"
        >
          <Typography variant="h2" className="tickets-hero-title mb-4">
            Unlock Your Journey
          </Typography>
          <Typography variant="h6" className="tickets-hero-subtitle mb-6">
            Step into the world of science with our interactive exhibits. Book
            your tickets and start your adventure today!
          </Typography>
          <a href="#tickets" className="tickets-hero-button">
            Book Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TicketsHeroSection;
