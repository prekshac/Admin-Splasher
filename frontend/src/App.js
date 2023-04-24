import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/main/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Signup from './components/main/Signup';
import Main from './components/main';



function App() {
  return (
    <div>
      < BrowserRouter>
        <Routes>

          
          <Route path='main' element={<Main/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          </Route>
          


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
