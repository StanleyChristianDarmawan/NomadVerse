import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Freelance Application</h1>
      <p>Please log in with Internet Identity to continue.</p>
      {/* <div>
        <Link to="/login">Log In</Link>
      </div> */}
    </div>
  );
};

export default LandingPage;
