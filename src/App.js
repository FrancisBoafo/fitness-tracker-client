import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import LoginDropdown from './components/LoginDropdown';
import Template from './Template';


import './App.css'; 

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Template />} />
          <Route path="/login" element={<LoginDropdown />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;












