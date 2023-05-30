import React from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";

const { themeColor } = app_config;

const Navbar = () => {

  const { title, themeColor } = app_config;
  const url = app_config.apiUrl;

  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );


  const showAvatar = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={currentUser.avatar?`${url}/${currentUser.avatar}` : '/avatar.png'} className="rounded-circle" height={30} />
        </a>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/user/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/user/mytemplates">
              My Templates
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" onClick={logout} type="button">
              Logout
            </a>
          </li>
        </ul>
      </li>
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: themeColor }}
      >
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
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src="/logo.png" height={50} alt="MDB Logo" loading="lazy" />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/feedback">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/manageentity">
                  Manage Entities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/addentity">
                  Add Entities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/addentitydata">
                  Add Entity Data
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
           
            {showAvatar()}
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
