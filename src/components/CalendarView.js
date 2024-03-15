import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';// Import your custom styles

const ordersData = [
  { id: 1, customer: "Customer 1", date: new Date(2024, 2, 13), status: "Pending" },
  { id: 2, customer: "Customer 2", date: new Date(2024, 2, 14), status: "Delivered" },
  { id: 3, customer: "Customer 3", date: new Date(2024, 2, 15), status: "Pending" },
  // Add more sample orders with different delivery dates and statuses
];

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const ordersOnSelectedDate = ordersData.filter(order => {
      return order.date.toDateString() === date.toDateString();
    });
    setOrdersForSelectedDate(ordersOnSelectedDate);
  };

  const getOrderColor = (status) => {
    return status === "Delivered" ? "green" : "red";
  };

  return (
    <div className="calendar-view">
      <h1>Orders Calendar View</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
        <div className="selected-orders">
          <h2>Orders for {selectedDate.toDateString()}</h2>
          <ul>
            {ordersForSelectedDate.map(order => (
              <li key={order.id} style={{ color: getOrderColor(order.status) }}>
                {order.customer} - {order.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
