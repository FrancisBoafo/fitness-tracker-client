import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';

import Template from './Template';


import './App.css'; 

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <Template />

      </Router>
    </ThemeProvider>
  );
}

export default App;












