
import React, { useState } from 'react';
import './styles.css'; // Import your custom styles

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Customer 1", date: "2024-03-15", status: "Pending" },
    { id: 2, customer: "Customer 2", date: "2024-03-16", status: "Shipped" }
  ]);

  const [formData, setFormData] = useState({
    customer: '',
    date: '',
    status: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      customer: formData.customer,
      date: formData.date,
      status: formData.status
    };
    setOrders([...orders, newOrder]);
    setFormData({ customer: '', date: '', status: '' });
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const handleUpdateStatus = (id) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        // Update status (for demonstration purposes, toggle between "Pending" and "Shipped")
        return { ...order, status: order.status === "Pending" ? "Shipped" : "Pending" };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h1>Orders Management</h1>
      {/* Order Form */}
      <input type="text" className='a' name="customer" value={formData.customer} onChange={handleInputChange} placeholder="Customer Name" />
      <input type="date" className='a' name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" />
      <input type="text" className='a' name="status" value={formData.status} onChange={handleInputChange} placeholder="Status" />
      <button id="btn" onClick={handleAddOrder}>Add Order</button>

      {/* Table of orders */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button className='edit-btn' onClick={() => handleUpdateStatus(order.id)}>Update Status</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
