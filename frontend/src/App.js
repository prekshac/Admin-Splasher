import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Feedback from './components/Feedback';
import BrowseDash from './components/BrowseDash';
import UserProfile from './components/user/UserProfile';
import UserDashboard from './components/user/UserDashboard';
import ConfigureDashboard from './components/user/ConfigureDashboard';



function App() {
  return (
    <div>
      < BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='feedback' element={<Feedback/>}/>
          <Route path='browse' element={<BrowseDash/>}/>
          <Route path='userprofile' element={<UserProfile/>}/>
          <Route path='userdashboard' element={<UserDashboard/>}/>
          <Route path='configdashboard' element={<ConfigureDashboard/>}/>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
