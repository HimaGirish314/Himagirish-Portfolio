import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Navbar = () => {
  const [clicked,setClicked]=useState(false)
  return (
        <nav>
            <Link to='/'><h3 className='logo'>Himagirish.dev</h3></Link>
              <div className="mobile-menu" onClick={()=>{setClicked(!clicked)}}>
                {clicked ?<AiOutlineCloseCircle className='menu-icons' />:<GiHamburgerMenu className='menu-icons' />}
              </div>
            <ul className={clicked ?"nav-items":"nav-items close"}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
  )
}

export default Navbar