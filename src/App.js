import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BusList from './components/BusList';
import SeatLayout from './components/SeatLayout';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bus-list" element={<BusList />} />
        <Route path="/seat-layout" element={<SeatLayout />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
