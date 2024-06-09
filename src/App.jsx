import { useState } from 'react'
import './App.css'
import Homepage from './Components/HomePage/homepage.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { Routes, Route } from 'react-router-dom';
import About from './Components/About/About.jsx'

import './Common.css'
const[defaultC, setDefault] = (1);
function App() {

function change(e){
  const value = e.target;
  console.log(value);
    setDefault(value);
}
  return (
    <>
      <div className='Navbar'>
        <Navbar value = {defaultC} font={"poppins"} textColor={"white"}/>
      </div>
      <Routes>
        <Route onclick={change} value={1} path="/" element={<Homepage />} />
        <Route onclick={change} value={2} path="/about" element={<About />} />
        <Route onclick={change} value={3} path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}



export default App
