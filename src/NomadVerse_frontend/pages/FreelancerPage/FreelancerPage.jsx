import React from 'react';
import Card from './Components/Card';
import Element from './Components/Element';
import FreelancerSide from './Components/FreelancerSide';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import Logout from './Components/Logout';
import Profile from './Components/Profile';
import Sidebar from './Components/Sidebar';

const FreelancerPage = () => {
  return (
    <div className="grid grid-cols-custom h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="m-10">
        <FreelancerSide />
        {/* <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
          </Routes>
        </Router> */}
      </div>
    </div>
  );
};

export default FreelancerPage;
