import React, { useEffect } from 'react';
import './Navbar.css';
import '../../Common.css'
import { Link } from 'react-router-dom';

// Mapping values to class names
const valueMap = {
  1: "home",
  2: "about",
  3: "contact",
  4: "projects"
};

function underline(value) {
  const classValue = valueMap[value];
  const navElement = document.querySelector(`.${classValue}`);
  if (navElement) {
    navElement.style.borderBottom = '2px solid black'; // Apply underline style
  }
}

function Navbar({ value1, font, textColor }) {
  // Use effect to call underline when the component mounts and value1 changes
  useEffect(() => {
    underline(value1);
  }, [value1]);

  return (
    <div className='MainDiv'>
      <div className="name poppins">Daksh Kanaujia</div>
      <nav>
        <ul className='navbar'>
          <li className={`nav-item text-${textColor} ${font} home`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`nav-item text-${textColor} ${font} about`}>
            <Link to='/about'>About</Link>
          </li>
          <li className={`nav-item text-${textColor} ${font} contact`}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className={`nav-item text-${textColor} ${font} projects`}>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
