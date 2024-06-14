import React from 'react';
import './Navbar.css';
import '../../Common.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function Navbar({font, textColor}) {
    return (
      <>
        <div className='MainDiv'>
          <div className="name poppins">Daksh Kanaujia</div>
          <nav>
              <ul className='navbar'>
                  <li className={`nav-item  ${font} home `}><NavLink     className={({isActive}) => isActive ? "text-blue-600" : ""} to = '/'>Home</NavLink></li>
                  <li className={`nav-item  ${font} about`}><NavLink     className={({isActive}) => isActive ? "text-blue-600" : ""} to = '/about'>About</NavLink></li>
                  <li className={`nav-item  ${font} projects`}><NavLink  className={({isActive}) => isActive ? "text-blue-600" : ""} to = '/projects'>Projects</NavLink></li>
                  <li className={`nav-item  ${font} contact`}><NavLink   className={({isActive}) => isActive ? "text-blue-600" : ""} to = '/contact'>Contact</NavLink></li>
              </ul>
          </nav>
        </div>
      </>
    )
}
export default Navbar;