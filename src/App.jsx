import { useState } from 'react'
import './App.css'
import Homepage from './Components/HomePage/homepage.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import './Common.css'

function App() {
  return (
    <>
        <div className='Navbar'>
          <Navbar font={"poppins"} textColor={"white"}/>
        </div>
        <Outlet/>
    </>
  )
}

export default App;
