import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';

import Template from './Template';
import Settings from './components/Settings'; 

import './App.css'; 

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <Template />
          <Routes>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;












