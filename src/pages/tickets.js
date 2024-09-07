import React, { useState, useEffect } from "react";
import "./Tickets.css";
import TicketsHeroSection from "../components/TicketsHeroSection";
import qrCodeImage from "../assets/bgimage/qr.jpg";

const Tickets = () => {
  const [ticketType, setTicketType] = useState("general");
  const [numTickets, setNumTickets] = useState(1);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [termsChecked, setTermsChecked] = useState(false);
  const [visitDate, setVisitDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("visit-date").setAttribute("min", today);
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [ticketType, numTickets, selectedEvents]);

  const handleEventChange = (event) => {
    const { value, checked } = event.target;
    setSelectedEvents((prev) =>
      checked ? [...prev, value] : prev.filter((e) => e !== value)
    );
  };

  const calculateTotal = () => {
    let ticketPrice = 0;
    switch (ticketType) {
      case "general":
        ticketPrice = 70;
        break;
      case "group":
        ticketPrice = 60;
        break;
      case "bpl":
        ticketPrice = 20;
        break;
      case "school":
        ticketPrice = 25;
        break;
      case "govt-school":
        ticketPrice = 10;
        break;
      default:
        ticketPrice = 0;
    }

    let eventPrice = selectedEvents.length > 0 ? 40 : 0;
    if (ticketType === "group" && numTickets > 25) {
      eventPrice = 30;
    } else if (ticketType === "govt-school") {
      eventPrice = 20;
    }

    const total =
      ticketPrice * numTickets +
      eventPrice * numTickets * selectedEvents.length;
    setGrandTotal(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <qrCodeImage />
      <div>
        <TicketsHeroSection />
        <div className="tickets-page">
          <div className="container">
            <h1>Book Your Tickets</h1>
            <p>
              Plan your visit to our museum by selecting the tickets and events
              you wish to explore!
            </p>

            <h2>Museum Entry-Ticket Prices (Compulsory)</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Entry Ticket Price (Rs. per head)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>General Entry</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>Group Booking (more than 25 people)</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>BPL Card Holder</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Children in Organized School Group</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Govt. or MCD School Group</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>

            <h2>Event Ticket Prices (Additional Charges)</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Price (Rs. per head)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="4">
                    Cosmic Horizons: An Immersive Space Adventure
                    <br />
                    Jurassic Legends: A Prehistoric Safari
                    <br />
                    A Beautiful Planet: An IMAX® 3D Experience
                    <br />
                    Chemistry Magic: Live Reactions and Explosions
                    <br />
                    Quantum Quests: Hands-On Physics Adventures
                  </td>
                  <td>Adult or Child</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Group (more than 25 people)</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Organized Public School Group</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Govt. or MCD School Group</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>

            <h2>Book Your Tickets</h2>
            <form id="ticket-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="visit-date">Date of Visit:</label>
                <input
                  type="date"
                  id="visit-date"
                  name="visit-date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticket-type">Ticket Type:</label>
                <select
                  id="ticket-type"
                  name="ticket-type"
                  value={ticketType}
                  onChange={(e) => setTicketType(e.target.value)}
                  required
                >
                  <option value="general">
                    General Entry - Rs. 70 per head
                  </option>
                  <option value="group">
                    Group Booking (more than 25 people) - Rs. 60 per head
                  </option>
                  <option value="bpl">BPL Card Holder - Rs. 20 per head</option>
                  <option value="school">
                    Organized School Group - Rs. 25 per head
                  </option>
                  <option value="govt-school">
                    Govt./MCD School Group - Rs. 10 per head
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="num-tickets">Number of Tickets:</label>
                <input
                  type="number"
                  id="num-tickets"
                  name="num-tickets"
                  min="1"
                  value={numTickets}
                  onChange={(e) => setNumTickets(parseInt(e.target.value))}
                  required
                />
              </div>
              <div className="form-group">
                <label>Events:</label>
                <div className="form-group inline">
                  <input
                    type="checkbox"
                    id="planetarium"
                    name="events"
                    value="Planetarium Show"
                    onChange={handleEventChange}
                  />
                  <label htmlFor="planetarium">
                    <a
                      href="event/spaceevent.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cosmic Horizons: An Immersive Space Adventure
                    </a>
                  </label>
                </div>
                <div className="form-group inline">
                  <input
                    type="checkbox"
                    id="dinosaur"
                    name="events"
                    value="Dinosaur Exhibition"
                    onChange={handleEventChange}
                  />
                  <label htmlFor="dinosaur">
                    <a
                      href="event/dinosaurevent.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jurassic Legends: A Prehistoric Safari
                    </a>
                  </label>
                </div>
                <div className="form-group inline">
                  <input
                    type="checkbox"
                    id="imax"
                    name="events"
                    value="IMAX 3D Movie"
                    onChange={handleEventChange}
                  />
                  <label htmlFor="imax">
                    <a
                      href="event/movieevent.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      A Beautiful Planet: An IMAX® 3D Experience
                    </a>
                  </label>
                </div>
                <div className="form-group inline">
                  <input
                    type="checkbox"
                    id="chemistry"
                    name="events"
                    value="Chemistry Live-Experiment Demonstration"
                    onChange={handleEventChange}
                  />
                  <label htmlFor="chemistry">
                    <a
                      href="event/chemistryevent.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chemistry Magic: Live Reactions and Explosions
                    </a>
                  </label>
                </div>
                <div className="form-group inline">
                  <input
                    type="checkbox"
                    id="physics"
                    name="events"
                    value="Physics Lab Tour"
                    onChange={handleEventChange}
                  />
                  <label htmlFor="physics">
                    <a
                      href="event/physicsevent.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quantum Quests: Hands-On Physics Adventures
                    </a>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <p className="grand-total">
                  Grand Total: Rs. {grandTotal}{" "}
                  {selectedEvents.length > 0 ? (
                    <span> (incl. selected events)</span>
                  ) : null}
                </p>
              </div>

              <div className="qr-code-placeholder">
                <img src="/qr.jpg" alt="QR Code" className="qr-code-image" />
              </div>

              <div className="form-group terms">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  required
                />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="/terms-and-conditions" target="_blank">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={!termsChecked}
                className="submit-button"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
