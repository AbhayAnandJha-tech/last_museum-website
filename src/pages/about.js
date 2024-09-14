import React from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import "./about.css";
import aboutlogoo from "../assets/bgimage/aboutlogoo.jpg";

const About = () => {
  return (
    <div>
      <aboutlogoo />
      <div>
        <AboutHeroSection />
        <div className="about-container">
          <div className="about-header">
            <h1>About Us</h1>
            <p className="about-intro">
              The National Science Centre, Delhi, part of the National Council
              of Science Museums, is one of the largest science centers in Asia.
              We are committed to engaging, educating, and entertaining visitors
              through interactive exhibitions and educational programs.
            </p>
          </div>

          <div className="about-content">
            <section className="about-section">
              <img
                src={aboutlogoo}
                alt="Science Centre"
                className="about-image"
              />
              <p>
                Established in 1992, the Centre serves as a beacon of knowledge
                and innovation, drawing in visitors from around the globe,
                including Nobel Laureates, scientists, and students. Our goal is
                to make science accessible and enjoyable for all ages.
              </p>
            </section>

            <section className="about-timings">
              <h2>Visiting Hours</h2>
              <p>
                Open from 9:30 a.m. – 6:00 p.m. every day, except Holi and
                Diwali. Last ticket sale at 5:15 p.m.
              </p>
            </section>

            <section className="about-getting-here">
              <h2>Getting Here</h2>
              <p>
                <strong>Metro route:</strong> Nearest stations: Pragati Maidan
                (1.9 km) and Indraprastha (3.2 km).
              </p>
              <p>
                <strong>Bus route:</strong> Routes: 334, 344, 355, 405A, 419.
              </p>
            </section>

            <section className="about-why-visit">
              <h2>Why Visit Us?</h2>
              <p>
                Explore hands-on exhibits, engaging demonstrations, and a
                variety of interactive activities designed to ignite curiosity
                and foster a love of science. Our iconic modern architecture and
                strategic location make us a must-visit destination.
              </p>
            </section>

            <section className="about-contact">
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong>
                <br />
                National Science Centre, Near Gate No. 1, Pragati Maidan,
                Bhairon Road, New Delhi – 110001, India.
              </p>
              <p>
                <strong>Phone:</strong> 0-742869-3710 (8 lines), Ext: 09 & 214
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:educationnscdelhi@gmail.com">
                  educationnscdelhi@gmail.com
                </a>
              </p>
            </section>

            <section className="about-social-media">
              <h2>Stay Connected</h2>
              <p>
                <a
                  href="https://www.facebook.com/474907972664246?ref=embed_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://maps.google.com/maps?ll=28.613137,77.245384&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=17382868364970822624"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find us on Google Maps
                </a>
              </p>
            </section>
          </div>

          <blockquote className="about-quote">
            “The National Science Centre, Delhi, is a beacon of knowledge and
            innovation, engaging minds of all ages.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
