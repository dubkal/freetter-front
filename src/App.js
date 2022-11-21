import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Signup from './component/Signup';
import Login from './component/Login';

const App = () => {
  return (
    <>
      <nav className='header'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
