import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './login';
import LandingPage from '../pages/LandingPage/';
import CompanyPage from '../pages/CompanyPage/';
import FreelancerPage from '../pages/FreelancerPage/';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/companyPage" element={<CompanyPage />} />
        <Route path="/freelancerPage" element={<FreelancerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
