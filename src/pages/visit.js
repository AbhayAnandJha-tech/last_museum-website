import React from "react";
import "./visit.css";

const Visit = () => {
  return (
    <div className="visit-container">
      <div className="visit-header">
        <h1>Plan Your Visit</h1>
        <p className="visit-intro">
          Experience the wonders of science at our museum. Find all the
          information you need to plan your visit, including opening hours,
          ticket prices, and more.
        </p>
      </div>

      <div className="visit-info">
        <section className="visit-section">
          <h2>Opening Hours</h2>
          <p>
            <strong>Monday to Saturday:</strong> 10:00 AM - 6:00 PM
            <br />
            <strong>Sunday:</strong> 11:00 AM - 7:00 PM
            <br />
            <em>Closed on public holidays.</em>
          </p>
        </section>

        <section className="visit-section">
          <h2>Ticket Prices</h2>
          <p>
            <strong>Adults:</strong> ₹100
            <br />
            <strong>Students:</strong> ₹50
            <br />
            <strong>Children (under 5):</strong> Free
            <br />
            <em>
              Group discounts available for school visits and large parties.
            </em>
          </p>
        </section>

        <section className="visit-section">
          <h2>Location</h2>
          <p>
            National Science Centre, Bhairon Marg,
            <br />
            Near Gate No. 1, Pragati Maidan,
            <br />
            New Delhi, Delhi 110001, India
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.35124511589!2d77.2368076!3d28.6139396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d8ed1b4e3f%3A0xf853f104d5e5704d!2sNational%20Science%20Centre!5e0!3m2!1sen!2sin!4v1694102755096!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="National Science Centre Location"
          ></iframe>
        </section>

        <section className="visit-section">
          <h2>Facilities</h2>
          <ul>
            <li>Wheelchair Accessibility</li>
            <li>Cafeteria with refreshments</li>
            <li>Gift shop with educational souvenirs</li>
            <li>Parking available on-site</li>
          </ul>
        </section>

        <section className="visit-section">
          <h2>Additional Resources</h2>
          <p>
            Check out our reports and publications for more information on our
            activities and exhibits:
          </p>
          <ul>
            <li>
              <a
                href="https://nscd.gov.in/wp-content/uploads/2024/01/Vigyanoday-volum-three-Final-20-02-2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vigyanoday Volume Three - 2020
              </a>
            </li>
            <li>
              <a
                href="https://nscd.gov.in/wp-content/uploads/2024/01/VigyanSrijnotsavReport-2019_.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vigyan Srijnotsav Report - 2019
              </a>
            </li>
            <li>
              <a
                href="https://nscd.gov.in/wp-content/uploads/2024/02/Activity-report2019-20.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Activity Report - 2019-20
              </a>
            </li>
            <li>
              <a
                href="https://nscd.gov.in/wp-content/uploads/2024/04/2021-2022_.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Activity Report - 2021-22
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Visit;
