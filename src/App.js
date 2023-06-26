import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import './App.css'; 

const Template = lazy(() => import('./Template'));
const LoginDropdown = lazy(() => import('./components/LoginDropdown'));

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Template />} />
            <Route path="/login" element={<LoginDropdown />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;














