import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import app_config from '../../config';
import { useUserContext } from '../../context/UserProvider';
import './Navbar.css';

const { themeColor } = app_config;

const Navbar = () => {
  const { title, themeColor } = app_config;
  const url = app_config.apiUrl;

  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: themeColor}} >
        {/* Container wrapper */}
        <div className="container">
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
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              {/* <img src="/logo.png" height={50} alt="MDB Logo" loading="lazy" /> */}
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink> */}
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink> */}
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/main/signup">
                  Sign Up
                </NavLink> */}
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/main/feedback">
                  Feedback
                </NavLink> */}
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/user/manageentity">
                  Manage Entities
                </NavLink> */}
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/user/addentity">
                  Add Entities
                </NavLink>
              </li> */}
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/user/addentitydata">
                  Add Entity Data
                </NavLink> */}
              </li>
            </ul>
            {/* Left links */}
          </div>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={50} alt="Black and White Portrait of a Man" loading="lazy" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
              <li>
                <NavLink className="dropdown-item" to='/user/profile'>
                  My profile
                </NavLink>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="" role='button' onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
