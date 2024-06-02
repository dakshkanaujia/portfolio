import React from 'react';
import './Navbar.css';
function Navbar() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <nav>
            <ul className='navbar'>
                <li className='nav-item'><a href="#">Home</a></li>
                <li className='nav-item'><a href="#">About</a></li>
                <li className='nav-item'><a href="#">Contact</a></li>
                <li className='nav-item'><a href="#">Resume</a></li>
            </ul>
        </nav>
      </>
    )
  }

export default Navbar;