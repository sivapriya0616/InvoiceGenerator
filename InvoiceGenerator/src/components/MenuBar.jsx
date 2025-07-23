import React from 'react';
import Logo from './logo.jsx'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container py-2">
        {/* Logo and Brand Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Logo />
          <span
            className="fw-bolder fs-4 mx-3"
            style={{ letterSpacing: '-0.05px', color: '#0D6EFDB2' }}
          >
            Invoice Generator
          </span>
        </Link>

        {/* Navbar Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item ">
              <Link className="nav-link fw-medium" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link fw-medium">
                 Generate
              </button>
            </li>
            <li>
            <button className="btn btn-primary rounded-pill px-4">
              Login/SignUp
            </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;