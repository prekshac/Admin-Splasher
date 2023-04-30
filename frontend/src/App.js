import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/main/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Signup from './components/main/Signup';
import Main from './components/main';
import Feedback from './components/Feedback';
import Authenticate from './components/main/Authenticate';
import User from './components/user';
import ConfigureDashboard from './components/user/ConfigureDashboard';



function App() {
  return (
    <div>
      < BrowserRouter>
        <Routes>


          <Route path='/' element={<Navigate to="/main/home" />} />
          <Route path='main' element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='authenticate' element={<Authenticate />} />
            <Route path='feedback' element={<Feedback />} />
          </Route>
          <Route path='user' element={<User />}>
            <Route path='configure' element={<ConfigureDashboard />} />
          </Route>



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;