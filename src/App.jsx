import { useState } from 'react'
import './App.css'
import Homepage from './Components/HomePage/homepage.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { Routes, Route } from 'react-router-dom';

import './Common.css'

function App() {

  return (
    <>
      {/* <Contact/> */}

      {/* <div className="pageHead">
        <div className='heading poppins'>DAKSH KANAUJIA</div>
        <div className='Navbar'>
        <Navbar font={"poppins"} textColor={"white"}/>
        </div>
      </div>
      <div className="home">
        <Homepage/>
      </div> */}
      <div className='Navbar'>
        <Navbar font={"poppins"} textColor={"white"}/>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}



export default App
