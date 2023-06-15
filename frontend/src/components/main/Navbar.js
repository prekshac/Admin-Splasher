import React from 'react';
import { NavLink } from 'react-router-dom';
import app_config from '../../config';
import { useUserContext } from '../../context/UserProvider';
import './Navbar.css';

const { themeColor } = app_config;

const Navbar = () => {
  const { loggedIn, setLoggedIn, logout } = useUserContext();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src="/logo.png" height={50} alt="MDB Logo" loading="lazy" />
            </a> */}
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Sign Up
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/feedback">
                  Feedback
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {loggedIn && (
            <div className="dropdown">
              <a
                
              >
                <h2 className='vista123'  >Admin Splasher</h2>
               
              </a>
             
            </div>
          )}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
