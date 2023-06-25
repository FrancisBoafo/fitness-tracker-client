import { Link } from 'react-router-dom';
import './components/Template.css'; 
import { ThemeContext } from './components/ThemeContext';
import { useContext, useState } from 'react';
import { FaSearch , FaUser,FaBars } from 'react-icons/fa';
import ChatBox from './components/ChatBox';
import LoginDropdown from './components/LoginDropdown';
import React from 'react';
import DropdownMenu from './components/DropdownMenu';
import { IconButton, Drawer, useTheme, useMediaQuery } from '@mui/material';
import twitterLogo from './Images/Twitter.png';  
import facebookLogo from './Images/Facebook.png';
import instagramLogo from './Images/Instagram.png';
import linkedinLogo from './Images/Linkedin.png'; 
import LogoImage1 from './Images/LogoImage3.png';
import appStoreLogo from './Images/AppleApp.png';
import googlePlayLogo from './Images/googleApp.png';
import NewbackgroundImage from './Images/Delivery.jpg';
import MainContent from './components/MainContent';



const Template = () => {
  const { theme } = useContext(ThemeContext);
  const materialTheme = useTheme();
  const isMobile = useMediaQuery(materialTheme.breakpoints.down('sm'));

  const bgStyles = {
    backgroundImage: `url(${NewbackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '155vw',
    width: '100vw',
    position: 'absolute',
    maxHeight: '100vh',
    minHeight: '150vh',
  };
  


  const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'background-color 0.3s ease',
    backgroundColor: 'transparent',
    fontFamily: 'Arial',
    color: '#000',
    fontSize: '1.0rem',
    
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const navItems = [
    { main: 'Menu', subs: ['Breakfast', 'Lunch', 'Dinner'] },
    { main: 'Services', subs: ['Delivery', 'Pick-up', 'Dine-In'] },
    { main: 'About Us', subs: ['Our Story', 'Contact Us', 'Feedback'] },
    { main: 'Help', subs: ['FAQs', 'Terms of Use', 'Privacy Policy'] },
  ];

  const listItems = navItems.map((item, index) => (
    <DropdownMenu 
      key={index} 
      mainItem={item.main} 
      subItems={item.subs} 
      openDropdown={openDropdown} 
      setOpenDropdown={setOpenDropdown} 
    />
  ));
  
  return (
    <div id="page-container" className={`template ${theme}`}>
      <div id="content-wrap">
        <header style={headerStyle} className='header'>
          <div className="logo">
            <img src={LogoImage1} alt="Logo" style={{ width: '50px', height: 'auto' }} />
            {!isMobile && <span className="logo-text">DeliveryFlex</span>} {/* The logo-text will only be rendered on larger screens */}
          </div>
  
          <div className="header-container" >
            <nav>
              {isMobile ? (
                <>
                  <IconButton edge="start" color="black" aria-label="menu" onClick={() => setOpenDrawer(true)}>
                    <FaBars />
                  </IconButton>
                  <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)}> 
                    {listItems}
                  </Drawer>
                </>
              ) : (
                listItems
              )}

              <div className="search-container">
                <input className="search-input" type="text" placeholder="Search restaurant..." />
                <FaSearch className="search-icon" />
              </div>
              <div className="search-container">
              <LoginDropdown><Link to="/login">
              <FaUser />
              </Link></LoginDropdown>
              </div>
            </nav>  
          </div>
        </header>

        
        <main>
        <div style={bgStyles}></div>
  <div className="container" >
    <h1>Discover Deliciousness</h1>
    <p>Enter your address and explore the best food around you.</p>
    <div className="search-bar">
      <input type="text" placeholder="Search your address..." />
      <button className="search-button">→</button> {/* Use a button for the arrow */}
    </div>
  </div>
</main>

<MainContent />
</div>
<footer className="app-footer">
  <div className="containers">
    <div className="row">
      <div className="col">
        <h5>About</h5>
        <ul>
          <li><Link to="/about">Our Story</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/partners">Our Partners</Link></li>
        </ul>
      </div>
      <div className="col"> 
        <h5>Explore</h5>
        <ul>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/cuisines">Cuisines</Link></li>
          <li><Link to="/locations">Delivery Locations</Link></li>
          <li><Link to="/offers">Offers</Link></li>
        </ul>
      </div>
      <div className="col">
        <h5>Support</h5>
        <ul>
          <li><Link to="/help">Help Center</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="col">
        <h5>Join Us</h5>
        <ul>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/become-partner">Become a Partner</Link></li>
        </ul>
      </div>
      <div className="col">
        <h5>Blog.</h5>
        <ul>
          <li><Link to="/blog">Latest Stories</Link></li>
          <li><Link to="/blog">Press</Link></li>
        </ul>
        
        </div>
        
      <div className="col">
        <h5>Contact</h5>
        <ul> 
          <li><Link to="/" >Phone: +1234567890</Link></li>
          <li><Link >Email: flex@gmail.com</Link></li>
        </ul>
      </div>
      
    </div>
          
          <div className="social-media-icons">
          <div className="download-links">
            <p>Follow us on social media:</p>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" style={{height: '30px', width: '30px'}} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" style={{height: '30px', width: '30px'}} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" style={{height: '30px', width: '30px'}} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" style={{height: '30px', width: '30px'}} />
            </a>
          </div>
          </div>
        </div>
        {/* Download Links */}
        <div className="download-links">
            <h2>Download Our App</h2>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appStoreLogo} alt="Download on the App Store" style={{height: '40px', width: 'auto'}} />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={googlePlayLogo} alt="Get it on Google Play" style={{height: '40px', width: 'auto'}} />
            </a>
          </div>
        <div className="footer-copyright">
          © 2023 Rama Fitness App. All rights reserved.
        </div>
      </footer>
      <ChatBox />
    </div>
  );
};

export default Template;







