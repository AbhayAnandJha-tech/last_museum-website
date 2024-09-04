import React from "react";
import "./TicketsHeroSection.css";
import ticketsHeroImage from "../assets/bgimage/tickets.jpg";

const TicketsHeroSection = () => {
  return (
    <div className="tickets-hero-section">
      <img
        src={ticketsHeroImage}
        alt="Tickets Section Hero"
        className="tickets-hero-bg"
      />
      <div className="tickets-hero-content">
        <h1>Tickets</h1>
        <p>
          Purchase your tickets to explore the wonders of our science exhibits
          and more.
        </p>
      </div>
    </div>
  );
};

export default TicketsHeroSection;
