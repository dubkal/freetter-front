import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Signup from './component/Signup';
import Login from './component/Login';
import Logout from './component/Logout';
import User from './component/User';
import Navigation from './component/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
