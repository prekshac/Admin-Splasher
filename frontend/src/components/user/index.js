import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const User = () => {
  return (
    <div>
      {/* <div className="row">
        <div className="col-3">Sidebar</div>
        <div className="col-9">
        </div>
      </div> */}
          <Navbar />
          <Outlet />
    </div>
  );
};

export default User;
