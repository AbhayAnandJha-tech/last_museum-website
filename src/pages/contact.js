import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subheader">
          We're here to help with any inquiries or support you need.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>General Contact</h3>
          <p>
            📞 Phone: 91-7428693710 – 17 (8 Lines) Extensions: Reception – 09 &
            214
          </p>
        </div>

        <div className="contact-card">
          <h3>Booking & Educational Queries</h3>
          <p>Contact: Shri Kailash Chandra or Shri Bharat Bhushan Srivastava</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:educationnscdelhi@gmail.com">
              educationnscdelhi@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Administrative Queries</h3>
          <p>Contact: Dy Controller of Administration</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:admn.nscd@gmail.com">admn.nscd@gmail.com</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Finance & Accounts Queries</h3>
          <p>Contact: Dy Controller of Finance & Accounts</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:financenscd@gmail.com">financenscd@gmail.com</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Purchase Queries</h3>
          <p>Contact: Section Officer</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:nscdelhi10@gmail.com">nscdelhi10@gmail.com</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Project Proposals</h3>
          <p>Contact: Director</p>
          <p>
            📧 Email: <a href="mailto:nscdl01@gmail.com">nscdl01@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <input type="text" name="name" placeholder=" " required />
            <label>Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder=" " required />
            <label>Your Email</label>
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder=" " />
            <label>Your Phone Number</label>
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder=" " required />
            <label>Subject</label>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder=" "
              rows="5"
              required
            ></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
