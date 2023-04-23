
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
import Articles from './Components/Articles';
import Journal from './Components/Journal';
function App() {
  return (
    <Router>
      <div>
        <Navbar />

      </div>
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/' element={<Journal />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/articles' element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
