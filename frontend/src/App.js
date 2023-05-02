import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/main/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/main/Signup';
import Main from './components/main';
import Feedback from './components/Feedback';
import Authenticate from './components/main/Authenticate';
import User from './components/user';
import ConfigureDashboard from './components/user/ConfigureDashboard';
import ManageEntity from './components/user/ManageEntities';
import EntityManager from './components/user/EntityManager';

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
            <Route path='manageentity' element={<ManageEntity />} />
            <Route path='entitymanager' element={<EntityManager />} />
          </Route>



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;