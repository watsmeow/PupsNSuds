import React from 'react';
import {useState} from 'react';
import './Header.css';
import bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>
        <h1 className='header-text'>Pups 'N <span className='stroke-text'>Suds</span></h1>
        {(menuOpened === false && mobile === true) ? (
          <div onClick={()=> setMenuOpened(true)}>
            <img src={bars} alt="" style={{width: '5rem', height: '3rem'}} />
          </div>
        ) : (
          <ul className='header-menu'>
            <li onClick={()=> setMenuOpened(false)}>
              <Link to='hero'
                  smooth={true}>Home</Link>
              </li>
            <li onClick={()=> setMenuOpened(false)}>
              <Link to='options'
              smooth={true}>Options</Link></li>
            <li onClick={()=> setMenuOpened(false)}>
              <Link to='sizes' 
              smooth={true}>Sizing</Link></li>
            <li onClick={()=> setMenuOpened(false)}>
              <Link to='reasons' 
              smooth={true}>Why Us</Link></li>
            <li onClick={()=> setMenuOpened(false)}>
              <Link to='testimonials' smooth={true}>Testimonials
              </Link></li>
          </ul>
        
        )}

    </div>
  );
};

export default Header