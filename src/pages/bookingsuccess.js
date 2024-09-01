import React from 'react';

const bookingData = {
  booking: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    visitDate: "2024-09-01",
    ticketType: "VIP",
    numTickets: 2,
    events: ["Music Concert", "Art Exhibition"],
    grandTotal: 2000,
    userqr: "john-upi@example.com"
  }
};

const Tickets = () => {
  const booking = bookingData.booking;
  
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      backgroundColor: '#f4f4f9',
      color: '#333',
      maxWidth: '800px',
      padding: '20px',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '0 auto'
    }}>
      <h2 style={{ textAlign: 'center', color: '#007bff' }}>Booking</h2>
      <center>Once our team verifies the payment, you'll receive booking confirmation on your registered E-Mail within 3-4 hours.</center>
      
      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Full Name:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.name || 'N/A'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Email:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.email || 'N/A'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Phone Number:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.phone || 'N/A'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Date of Visit:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.visitDate || 'N/A'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Ticket Type:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.ticketType || 'N/A'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Number of Tickets:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.numTickets || '0'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Selected Events:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.events && booking.events.length > 0 ? booking.events.join(', ') : 'None'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Grand Total:</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>Rs. {booking.grandTotal ? booking.grandTotal : '0'}</span>
      </div>

      <div style={{
        marginBottom: '15px',
        padding: '10px',
        borderBottom: '1px solid #ddd'
      }}>
        <strong style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Your UPI ID used for the payment (for payment verification):</strong>
        <span style={{ fontSize: '1.1em', color: '#333' }}>{booking.userqr || 'N/A'}</span>
      </div>
    </div>
  );
}

export default Tickets;
