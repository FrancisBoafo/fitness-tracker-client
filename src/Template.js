
import { Link } from 'react-router-dom';
import './components/Template.css'; 
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';
import { FaSearch , FaUser} from 'react-icons/fa';
import ChatBox from './components/ChatBox';
import LoginDropdown from './components/LoginDropdown';
import React, { useState} from 'react';
import DropdownMenu from './components/DropdownMenu';

// Assuming you've downloaded and imported the logos
import twitterLogo from './Images/Twitter.png';  
import facebookLogo from './Images/Facebook.png';
import instagramLogo from './Images/Instagram.png';
import linkedinLogo from './Images/Linkedin.png'; 
import LogoImage1 from './Images/Picture2.png';
import appStoreLogo from './Images/AppleApp.png';
import googlePlayLogo from './Images/googleApp.png';
import NewbackgroundImage from './Images/9.2newbackground.jpg';
import MainContent from './components/MainContent';


const Template = () => {
  const { theme } = useContext(ThemeContext);
  const bgStyles = {
    backgroundImage: `url(${NewbackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const [headerStyle] = useState({
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: '20px 0',
    transition: 'background-color 0.3s ease',
    /*backgroundColor: 'rgba(24, 24, 24, 0.8)', */// start with transparent background
    backgroundColor: 'black',
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
        <Link to="/">Home</Link>
        <DropdownMenu mainItem="Menu" subItems={["Breakfast", "Lunch", "Dinner"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <DropdownMenu mainItem="Services" subItems={["Delivery", "Pick-up", "Dine-In"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <DropdownMenu mainItem="About Us" subItems={["Our Story", "Contact Us", "Feedback"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <DropdownMenu mainItem="Help" subItems={["FAQs", "Terms of Use", "Privacy Policy"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />

        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search menu.." />
          <FaSearch className="search-icon" />
        </div>
          </nav>

          <div>
            <LoginDropdown><FaUser /></LoginDropdown>
          </div>
        </div>
      </header>

        <div style={bgStyles}></div>
        <main>
        <div className="container">
        <h1>Dine Fine, Anytime!</h1>
        <p>Craving home-style meals or gourmet dishes? Our food delivery service brings the world's kitchen to your doorstep. Dive into a realm of flavors without stepping out of your home. Your culinary adventure begins now.</p>
        <Link className="get-started" to="/signup">Order Online</Link>
      </div>
</main>
<MainContent />
      </div>
      <footer className="app-footer">
        <div>
          <div className="row">
            <div className="col">
              <h5>About</h5>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col">
              <h5>Features</h5>
              <ul>
                <li><Link to="/workouts">Workout Plans</Link></li>
                <li><Link to="/nutrition">Nutrition Guide</Link></li>
                <li><Link to="/progress">Progress Tracker</Link></li>
                <li><Link to="/community">Fitness Community</Link></li>
              </ul>
            </div>
            <div className="col">
              <h5>Support and Legal</h5>
              <ul>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col">
              <h5>Contact</h5>
              <p>Phone: +1234567890</p>
              <p>Email: info@rama.com</p>
              <p>Address: 1234 Fitness Street, Healthy City, 56789</p>
            </div>
          </div>
          <div className="social-media-icons">
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







