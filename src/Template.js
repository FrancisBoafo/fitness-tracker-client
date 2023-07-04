import { Link } from 'react-router-dom';
import './components/Template.css'; 
import { ThemeContext } from './components/ThemeContext';
import { useContext, useState } from 'react';
import { FaSearch , FaUser,FaBars } from 'react-icons/fa';
import ChatBox from './components/ChatBox';
import LoginDropdown from './components/LoginDropdown';
import DropdownMenu from './components/DropdownMenu';
import { IconButton, Drawer, useTheme, useMediaQuery, List, ListItem, ListItemText,Button } from '@mui/material';
import twitterLogo from './Images/Twitter.png';  
import facebookLogo from './Images/Facebook.png';
import instagramLogo from './Images/Instagram.png';
import linkedinLogo from './Images/Linkedin.png'; 
import LogoImage1 from './Images/LogoImage3.png';
import NewbackgroundImage from './Images/Delivery.jpg';
import MainContent from './components/MainContent';
import React, { useEffect } from 'react';




const Template = () => {
  const { theme } = useContext(ThemeContext);
  const materialTheme = useTheme();
  const isMobile = useMediaQuery(materialTheme.breakpoints.down('md'));
  const [isScrolled, setIsScrolled] = useState(false);
  
  


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
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > 50) { // Choose the scroll position that should trigger the color change
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const headerStyle = {
    position: 'fixed',
    left: 0,
    transition: 'background-color 0.0s ease',
    backgroundColor: isScrolled ? 'white' : 'transparent',
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

  const drawerContent = (
    <List>
      <ListItem>
        <Button component={Link} to="/signup" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/login" variant="contained" color="secondary" fullWidth>
          Log In
        </Button>
      </ListItem>
      <ListItem button onClick={() => console.log('Create a business account')}>
        <ListItemText primary="Create a business account" />
      </ListItem>
      <ListItem button onClick={() => console.log('Add your restaurant')}>
        <ListItemText primary="Add your restaurant" />
      </ListItem>
      <ListItem button onClick={() => console.log('Sign up to deliver')}>
        <ListItemText primary="Sign up to deliver" />
      </ListItem>
      <ListItem button onClick={() => console.log('About us')}>
        <ListItemText primary="About us" />
      </ListItem>
    </List>
  );
  
  
  return (
    <div id="page-container" className={`template ${theme}`}>
      <div id="content-wrap">
        <header style={headerStyle} className='header'>
          <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {isMobile && (
                <IconButton edge="start" color="black" aria-label="menu" onClick={() => setOpenDrawer(true)}>
                  <FaBars />
                </IconButton>
              )}
              <div className="logo">
                <img src={LogoImage1} alt="Logo" style={{ width: '50px', height: 'auto' }} />
                {!isMobile && <span className="logo-text">DeliveryFlex</span>}
              </div>
            </div>
  
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <nav style={{ marginRight: '20px' }}>{listItems}</nav>
                <div className="search-container">
                  <input className="search-input" type="text" placeholder="Search restaurant..." />
                  <FaSearch className="search-icon" />
                </div>
                <LoginDropdown>
                  <Link to="/login">
                    <FaUser />
                  </Link>
                </LoginDropdown>
              </div>
            )}
  
            {isMobile && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="search-container">
                  <input className="search-input" type="text" placeholder="Search restaurant..." />
                  <FaSearch className="search-icon" />
                </div>
                <LoginDropdown>
                  <Link to="/login">
                    <FaUser />
                  </Link>
                </LoginDropdown>
              </div>
            )}
          </div> 
  
          <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {drawerContent}
    </Drawer>

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
          <li><Link >Email:flex@gmail.com</Link></li>
        </ul>
      </div>
      
    </div>
    
    <div className="row footer-bottom">
   
          <div className="social-media-icons">
          <div className="download-links">
            <p>Follow us on social media:</p>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" style={{height: '25px', width: '25px'}} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" style={{height: '25px', width: '25px'}} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" style={{height: '25px', width: '25px'}} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" style={{height: '25px', width: '25px'}} />
            </a>
          </div>
          </div>

        {/* Download Links */}
        <div className="footer-copyright">
          © 2023 Rama Fitness App. All rights reserved.
        </div>
        </div>
        </div>



      </footer>
      <ChatBox />
    </div>
  );
};

export default Template;







