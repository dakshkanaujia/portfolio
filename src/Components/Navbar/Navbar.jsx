import React from 'react';
import './Navbar.css';
import '../../Common.css'
import { Link } from 'react-router-dom';
function Navbar({font, textColor}) {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='MainDiv'>
          <div className="name poppins">Daksh Kanaujia</div>
          <nav>
              <ul className='navbar'>
                  <li className={`nav-item text-${textColor} ${font}`}><Link to = '/'>Home</Link></li>
                  <li className={`nav-item text-${textColor} ${font}`}><Link to = '/about'>About</Link></li>
                  <li className={`nav-item text-${textColor} ${font}`}><Link to = '/contact'>Contact</Link></li>
                  <li className={`nav-item text-${textColor} ${font}`}><Link to = '/resume'>Resume</Link></li>
              </ul>
          </nav>
        </div>
      </>
    )
  }

export default Navbar;