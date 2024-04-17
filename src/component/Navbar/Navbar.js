import React from 'react';
import './Navbar.css';
import playStoreImage from './m21.png';
import appStoreImage from './m212.png';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout, userName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/courses" className="navbar-brand">FluencyHub</Link>
        <div className="navbar-links">
          {!isLoggedIn && (
            <div className="app-store-links">
              <Link to="/play-store" className="app-store-Link">
                <img src={playStoreImage} alt="Google Play Store" />
              </Link>
              <Link to="/app-store" className="app-store-Link">
                <img src={appStoreImage} alt="Apple App Store" />
              </Link>
            </div>
          )}
          {isLoggedIn? (
            <>
              <span className="user-name">Welcome, {userName}</span>
              <button type="button" onClick={onLogout} className="logout-button">Logout</button>
            </>
          ) : (
            <Link to="/login" className="login-button">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;