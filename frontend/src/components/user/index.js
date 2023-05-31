import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const User = () => {
  return (
    <div>
      {/* <div className="row">
        <div className="col-3">Sidebar</div>
        <div className="col-9">
        </div>
      </div> */}
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default User;
