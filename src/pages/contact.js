import React from "react";
import "./contact.css";
import ContactHeroSection from "../components/ContactHeroSection";

const Contact = () => {
  const contactInfo = [
    {
      title: "General Contact",
      details:
        "Phone: 91-7428693710 – 17 (8 Lines) Extensions: Reception – 09 & 214",
      icon: "📞",
    },
    {
      title: "Booking & Educational Queries",
      details:
        "Contact: Shri Kailash Chandra or Shri Bharat Bhushan Srivastava",
      email: "educationnscdelhi@gmail.com",
    },
    {
      title: "Administrative Queries",
      details: "Contact: Dy Controller of Administration",
      email: "admn.nscd@gmail.com",
    },
    {
      title: "Finance & Accounts Queries",
      details: "Contact: Dy Controller of Finance & Accounts",
      email: "financenscd@gmail.com",
    },
    {
      title: "Purchase Queries",
      details: "Contact: Section Officer",
      email: "nscdelhi10@gmail.com",
    },
    {
      title: "Project Proposals",
      details: "Contact: Director",
      email: "nscdl01@gmail.com",
    },
  ];

  const formFields = [
    { type: "text", name: "name", label: "Your Name" },
    { type: "email", name: "email", label: "Your Email" },
    { type: "tel", name: "phone", label: "Your Phone Number" },
    { type: "text", name: "subject", label: "Subject" },
  ];

  return (
    <div>
      <ContactHeroSection />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subheader">
            We're here to assist you with any inquiries or support you need.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <div className="contact-card" key={index}>
              <h3>{contact.title}</h3>
              <p>{contact.details}</p>
              {contact.email && (
                <p>
                  <span role="img" aria-label="email">
                    📧
                  </span>{" "}
                  Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            {formFields.map((input, index) => (
              <div className="form-group" key={index}>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder=" "
                  required
                />
                <label>{input.label}</label>
              </div>
            ))}
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
    </div>
  );
};

export default Contact;
