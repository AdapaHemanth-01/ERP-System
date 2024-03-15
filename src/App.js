import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faShoppingBag, faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/Products';
import OrdersManagement from './components/Orders';
import CalendarView from './components/CalendarView';
import './components/styles.css'; // Import your custom styles

const App = () => {
  return (
    
    <Router>
      <center>
<div id="heading" style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px' }}>
  <h1>Simplified ERP System with React</h1>
  {/* <img src="./components/images1.jpg" alt="Image1" /> */}
</div>
</center>
      <div className="container">
        <nav className="sidenav">
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/products">
                <FontAwesomeIcon icon={faShoppingBag} /> Products Management
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <FontAwesomeIcon icon={faClipboardList} /> Orders Management
              </Link>
            </li>
            <li>
              <Link to="/calendar">
                <FontAwesomeIcon icon={faCalendarAlt} /> Calendar View
              </Link>
            </li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/calendar" element={<CalendarView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;




