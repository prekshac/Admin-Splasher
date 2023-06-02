
import './App.css';
import Home from './components/Home';
import Login from './components/main/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/main/Signup';
import Main from './components/main';
import Feedback from './components/Feedback';
import Authenticate from './components/main/Authenticate';
import User from './components/user';
import ConfigureDashboard from './components/user/ConfigureDashboard';
import ManageEntity from './components/user/ManageEntities';
import AddEntity from './components/user/AddEntity';
import AddEntityData from './components/user/AddEntityData';
import UserProvider from './context/UserProvider';
import UserAuth from './auth/UserAuth';
import Example from './components/user/Sidebar';
import Profile from './components/user/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/main/home" />} />
            <Route path="main" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="authenticate" element={<Authenticate />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>
            <Route
              path="user"
              element={
                <UserAuth>
                  <User />
                </UserAuth>
              }
            >
              <Route path="configure" element={<ConfigureDashboard />} />
              <Route path="manageentity" element={<ManageEntity />} />
              <Route path="addentity" element={<AddEntity />} />
              <Route path="addentitydata" element={<AddEntityData />} />
              <Route path="sidebar" element={<Example />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
