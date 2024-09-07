import React, { useState, useEffect } from 'react';

const Tickets = () => {
  const [booking, setBooking] = useState({
    name: 'N/A',
    email: 'N/A',
    phone: 'N/A',
    visitDate: 'N/A',
    ticketType: 'N/A',
    numTickets: 0,
    events: [],
    grandTotal: 0,
    userqr: 'N/A',
  });

  useEffect(() => {
    const fetchBookingData = async (id) => {
      try {
        const response = await fetch(/booking/${id});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooking({
          name: data.name || 'N/A',
          email: data.email || 'N/A',
          phone: data.phone || 'N/A',
          visitDate: data.visitDate || 'N/A',
          ticketType: data.ticketType || 'N/A',
          numTickets: data.numTickets || 0,
          events: data.events && data.events.length > 0 ? data.events : ['None'],
          grandTotal: data.grandTotal || 0,
          userqr: data.userqr || 'N/A',
        });
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('id');
    if (bookingId) {
      fetchBookingData(bookingId);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Booking</h2>
      <center>
        Once our team verifies the payment, you'll receive a booking confirmation on your registered email within 3-4 hours.
      </center>
      <div style={styles.formGroup}>
        <strong>Full Name:</strong> <span>{booking.name}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Email:</strong> <span>{booking.email}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Phone Number:</strong> <span>{booking.phone}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Date of Visit:</strong> <span>{booking.visitDate}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Ticket Type:</strong> <span>{booking.ticketType}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Number of Tickets:</strong> <span>{booking.numTickets}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Selected Events:</strong> <span>{booking.events.join(', ')}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Grand Total:</strong> <span>Rs. {booking.grandTotal}</span>
      </div>
      <div style={styles.formGroup}>
        <strong>Your UPI ID used for the payment (for payment verification):</strong> <span>{booking.userqr}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#007bff',
  },
  formGroup: {
    marginBottom: '15px',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default Tickets;