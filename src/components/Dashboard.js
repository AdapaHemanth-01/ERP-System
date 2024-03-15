
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div id="dash-div1">
        <p>Total number of products: 2</p>
      </div>
      <div id="dash-div2">
        <p>Total number of orders: 3</p>
      </div>
      <button id="btn1" onClick={() => window.location.href = "/products"}>Products Management</button>
      <button id="btn" onClick={() => window.location.href = "/orders"}>Orders Management</button>
    </div>
  );
}

export default Dashboard;
