// Navbar.js
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showingLogin, setShowingLogin] = useState(true);

  const onLoginClick = () => {
    setDropdownOpen(!dropdownOpen);
    setShowingLogin(true);
  };

  const onSignupClick = () => {
    setDropdownOpen(!dropdownOpen);
    setShowingLogin(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Other navbar contents... */}
      <div className="auth">
        <button onClick={onLoginClick}>
          {/* Replace this with your login icon */}
          Login
        </button>
        <button onClick={onSignupClick}>
          {/* Replace this with your signup icon */}
          Signup
        </button>
      </div>
      <Dropdown isOpen={dropdownOpen}>
        {showingLogin
          ? <LoginForm 
              onGoogle={closeDropdown}
              onFacebook={closeDropdown}
              onTwitter={closeDropdown}
              onShowSignup={() => setShowingLogin(false)}
            />
          : <SignupForm 
              onSignupAsUser={closeDropdown}
              onSignupAsTrainer={closeDropdown}
              onShowLogin={() => setShowingLogin(true)}
            />
        }
      </Dropdown>
    </nav>
  );
};

export default Navbar;
