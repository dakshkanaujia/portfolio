import { useState } from 'react'
import './App.css'
import Homepage from './Components/HomePage/homepage.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

function App() {

  return (
    <>
      <div className="pageHead">
        <div className='heading'>DAKSH KANAUJIA</div>
        <div className='Navbar'>
        <Navbar/>
        </div>
      </div>
      <div className="home">
        <Homepage/>
      </div>
    </>
  )
}

export default App
