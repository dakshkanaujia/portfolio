import React from 'react';
import './Navbar.css';
import '../../Common.css'
import { Link } from 'react-router-dom';


function Navbar({font, textColor}) {

    return (
      <>
        <div className='MainDiv'>
          <div className="name poppins">Daksh Kanaujia</div>
          <nav>
              <ul className='navbar'>
                  <li className={`nav-item text-${textColor} ${font} home `}><Link to = '/'>Home</Link></li>
                  <li className={`nav-item text-${textColor} ${font} about`}><Link to = '/about'>About</Link></li>
                  <li className={`nav-item text-${textColor} ${font} projects`}><Link to = '/projects'>Projects</Link></li>
                  <li className={`nav-item text-${textColor} ${font} contact`}><Link to = '/contact'>Contact</Link></li>
              </ul>
          </nav>
        </div>
      </>
    )
}
export default Navbar;