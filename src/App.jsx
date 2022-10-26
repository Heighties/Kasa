import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import House from './pages/House';
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './pages/About';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/house' element={<House />} />
        <Route path='/about' element={< About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
