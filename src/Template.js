
import { Link } from 'react-router-dom';
import './components/Template.css'; 
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';
import { FaSearch , FaUser,FaBars} from 'react-icons/fa';
import ChatBox from './components/ChatBox';
import LoginDropdown from './components/LoginDropdown';
import React, { useState} from 'react';
import DropdownMenu from './components/DropdownMenu';
import { IconButton, Drawer,useTheme, useMediaQuery } from '@mui/material';

// Assuming you've downloaded and imported the logos
import twitterLogo from './Images/Twitter.png';  
import facebookLogo from './Images/Facebook.png';
import instagramLogo from './Images/Instagram.png';
import linkedinLogo from './Images/Linkedin.png'; 
import LogoImage1 from './Images/Picture2.png';
import appStoreLogo from './Images/apple1.png';
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
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    position : 'fixed',
  };
  

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const listItems = (
    <>
      <Link to="/">Home</Link>
      <DropdownMenu mainItem="Menu" subItems={["Breakfast", "Lunch", "Dinner"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <DropdownMenu mainItem="Services" subItems={["Delivery", "Pick-up", "Dine-In"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <DropdownMenu mainItem="About Us" subItems={["Our Story", "Contact Us", "Feedback"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <DropdownMenu mainItem="Help" subItems={["FAQs", "Terms of Use", "Privacy Policy"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
    </>
  );
  


  const [headerStyle] = useState({
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: '20px 0',
    transition: 'background-color 0.3s ease',
    /*backgroundColor: 'rgba(24, 24, 24, 0.8)', */// start with transparent background
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Arial',
    color: '#000',
    
  });
  
  

  
  return (
    <div id="page-container" className={`template ${theme}`}>
      <div id="content-wrap">
        <header style={headerStyle} className='header'>
          <div className="logo">
            <img src={LogoImage1} alt="Logo" style={{ width: '50px', height: 'auto' }} />
            <span className="logo-text">DeliveryFlex</span>
          </div>
  
          <div className="header-container" >
            <nav>
              {isMobile ? (
                <>
                  <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
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
            </nav>

            <LoginDropdown><FaUser /></LoginDropdown>
          </div>
        </header>

        <div style={bgStyles}></div>
        <main>
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
  <div className="container">
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
          <li><Link >Address: 1234 Fitness Street, Healthy City, 56789</Link></li>
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
         
        <ChatBox />
      </footer>
    </div>
  );
};

export default Template;







