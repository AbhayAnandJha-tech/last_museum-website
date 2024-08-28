import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>

        <div className="info-box">
          <div className="icon">📞</div>
          <div>
            <h3>General Contact</h3>
            <p>Phone: 91-7428693710 – 17 (8 Lines)</p>
            <p>Extensions: Reception – 09 & 214</p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon">🎟️</div>
          <div>
            <h3>Booking of Museum Visit & Educational Queries</h3>
            <p>
              Contact: Shri Kailash Chandra or Shri Bharat Bhushan Srivastava
            </p>
            <p>
              Email:{" "}
              <a href="mailto:educationnscdelhi@gmail.com">
                educationnscdelhi@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon">📝</div>
          <div>
            <h3>Administrative & General Queries</h3>
            <p>Contact: Dy Controller of Administration</p>
            <p>
              Email:{" "}
              <a href="mailto:admn.nscd@gmail.com">admn.nscd@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon">💰</div>
          <div>
            <h3>Payment, Finance, and Accounts Queries</h3>
            <p>Contact: Dy Controller of Finance & Accounts</p>
            <p>
              Email:{" "}
              <a href="mailto:financenscd@gmail.com">financenscd@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon">🛒</div>
          <div>
            <h3>Purchase Queries</h3>
            <p>Contact: Section Officer</p>
            <p>
              Email:{" "}
              <a href="mailto:nscdelhi10@gmail.com">nscdelhi10@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="info-box">
          <div className="icon">📊</div>
          <div>
            <h3>Project Related Proposal / Query</h3>
            <p>Contact: Director</p>
            <p>
              Email: <a href="mailto:nscdl01@gmail.com">nscdl01@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
