import { stack as Menu } from 'react-burger-menu';
import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Menu>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/user/profile">
          User Profile
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/user/configure">
          Configure Dashboard
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/user/addentity">
          Add Entity 
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/user/manageentity">
          Manage Entity
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/user/addentitydata">
          Add Entity Data
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="dashboard" className="menu-item" to="/user/dashboard">
          View Dashboard
        </NavLink>
      </div>
      
      
    </Menu>
  );
};

export default Sidebar;
