import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './SettingsButton.css';

function SettingsButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dropdown">
      <button className="dropbtn">Settings</button>
      <div className="dropdown-content">
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    </div>
  );
}

export default SettingsButton;




