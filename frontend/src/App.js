
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Register from './Components/Register';
function App() {
  return (
    <Router>
      <div>
        <Navbar />

      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
