import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './Navbar.css';
    import  {Button}  from './Button';
    
    function Navbar() {
      const [click, setClick] = useState(false);
      const [button, setButton] = useState(true);
    
      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false);
    
      // Function to show button based on window size
      const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      // UseEffect to handle button visibility on window resize
      React.useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton);
      }, []);
    
      return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                THE ART MUSEUM
                <i className='fab fa-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/tickets' className='nav-links' onClick={closeMobileMenu}>
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link to='/exhibition' className='nav-links' onClick={closeMobileMenu}>
                   Exhibition
                  </Link>
                  </li>
                <li>
                  <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
          </nav>
        </>
      );
    }
    
    export default Navbar;
    