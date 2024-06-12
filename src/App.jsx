import { useState } from 'react'
import './App.css'
import Homepage from './Components/HomePage/homepage.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import './Common.css'

function App() {
  return (
    <Router>
      <div>
        <div className='Navbar'>
          <Navbar font={"poppins"} textColor={"white"}/>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
