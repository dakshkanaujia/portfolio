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
                  <li className={`nav-item text-${textColor} ${font} home `}><NavLink     className={({isActive}) => isActive ? "border-b-3" : ""} to = '/'>Home</NavLink></li>
                  <li className={`nav-item text-${textColor} ${font} about`}><NavLink     className={({isActive}) => isActive ? "border-b-3" : ""} to = '/about'>About</NavLink></li>
                  <li className={`nav-item text-${textColor} ${font} projects`}><NavLink  className={({isActive}) => isActive ? "border-b-3" : ""} to = '/projects'>Projects</NavLink></li>
                  <li className={`nav-item text-${textColor} ${font} contact`}><NavLink   className={({isActive}) => isActive ? "border-b-3" : ""} to = '/contact'>Contact</NavLink></li>
              </ul>
          </nav>
        </div>
      </>
    )
}
export default Navbar;