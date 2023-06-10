import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Router>
      <div>
       
              <Link to="http://localhost:3001/dashboard/app">Go to Example Website</Link>
      </div>
    </Router>
  );
};

export default Dashboard;
