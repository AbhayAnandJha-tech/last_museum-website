import React from "react";
import "./about.css";

const About = ({ content }) => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        National Science Centre, Delhi, is a part of the largest network of
        Science Centres/ Museums in the world known as the National Council of
        Science Museums (NCSM), an autonomous society under the Ministry of
        Culture, Government of India, formed on April 4, 1978.
      </p>
      <p>
        National Science Centre, Delhi, is one of the largest Science Centres in
        Asia and is popularly known amongst its visitors as “A Dream Castle for
        One and All”. The iconic structure of the Centre is an exemplary
        landmark in modern architecture, strategically located in the vicinity
        of Pragati Maidan Complex, a major commercial exhibition hub in India.
        The Centre attracts an annual footfall of more than half a million
        visitors, including Nobel Laureates, Eminent Scientists & Technocrats,
        Astronauts, Museum Professionals, and many other luminaries from various
        fields. The primary objective of the Centre is to engage, educate, and
        entertain visitors through thematic exhibitions, interactive educational
        activities, and outreach programmes.
      </p>
      <p>
        National Science Centre, Delhi, was inaugurated on January 9th, 1992, by
        Shri P V Narsimha Rao, the then Hon’ble Prime Minister of India. The
        Centre is a unit of the National Council of Science Museums (NCSM),
        which has 27 Science Centres & Science Cities under its umbrella. NCSM
        is funded and governed by the Ministry of Culture, Government of India.
      </p>
      <h2>Timings</h2>
      <p>
        Visiting Hours: 9:30 a.m. – 6:00 p.m. (All week days), except Holi and
        Diwali.
        <br />
        (Ticket sale at the counter stops at 5.15 p.m.)
      </p>
      <h2>Getting Here</h2>
      <p>
        <strong>Metro route:</strong> The nearest Blue line Metro stations are
        Pragati Maidan Metro Station (Supreme Court) (1.9 kms) and Indraprastha
        (3.2 kms) Metro Station. Plan your trip with Google Maps.
      </p>
      <p>
        <strong>Bus route:</strong> Buses going to NSCD: 334, 344, 355, 405A,
        419.
      </p>
      <h2>Contact Information</h2>
      <p>
        <strong>Postal Address:</strong>
        <br />
        National Science Centre (National Council of Science Museums)
        <br />
        Ministry of Culture Near Gate No. 1,
        <br />
        Pragati Maidan, Bhairon Road,
        <br />
        New Delhi – 110001 INDIA
        <br />
        Phone: 0-742869-3710 -17 (8 lines) Extensions: Reception – 09 & 214
        <br />
        Email:{" "}
        <a href="mailto:educationnscdelhi@gmail.com">
          educationnscdelhi@gmail.com
        </a>
      </p>
      <h2>Visitor Statistics</h2>
      <p>
        For more detailed statistics, please visit our official Facebook page.
      </p>
      <h2>Social Media</h2>
      <p>
        <a
          href="https://www.facebook.com/474907972664246?ref=embed_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Facebook page
        </a>
      </p>
      <h2>Location</h2>
      <p>
        <a
          href="https://maps.google.com/maps?ll=28.613137,77.245384&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=17382868364970822624"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
      </p>

      <blockquote>
        “The National Science Centre, Delhi, is a beacon of knowledge and
        innovation, engaging minds of all ages.”
      </blockquote>
    </div>
  );
};

export default About;
