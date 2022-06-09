import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="header" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
