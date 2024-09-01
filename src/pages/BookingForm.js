// src/BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    ticketType: 'standard',
    numTickets: 1,
    events: [],
    grandTotal: '',
    userqr: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      events: checked ? [...prevData.events, value] : prevData.events.filter(event => event !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        window.location.href = `/display?id=${result._id}`;
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-lg mt-24 mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-1">
        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Name:</legend>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Email:</legend>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Phone:</legend>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Visit Date:</legend>
          <input
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
            required
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Ticket Type:</legend>
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            className="p-1 border border-gray-300 rounded text-sm"
          >
            <option value="standard">Standard</option>
            <option value="vip">VIP</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Number of Tickets:</legend>
          <input
            type="number"
            name="numTickets"
            value={formData.numTickets}
            onChange={handleChange}
            required
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <fieldset className="space-y-1">
          <legend className="font-semibold text-sm">Events:</legend>
          <div className="flex flex-col space-y-1">
            <legend className="flex items-center text-sm">
              <input
                type="checkbox"
                name="events"
                value="event1"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Event 1
            </legend>
            <legend className="flex items-center text-sm">
              <input
                type="checkbox"
                name="events"
                value="event2"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Event 2
            </legend>
          </div>
        </fieldset>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">Grand Total:</legend>
          <input
            type="text"
            name="grandTotal"
            value={formData.grandTotal}
            onChange={handleChange}
            required
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <legend className="font-semibold text-sm">User QR:</legend>
          <input
            type="text"
            name="userqr"
            value={formData.userqr}
            onChange={handleChange}
            className="p-1 border border-gray-300 rounded text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
