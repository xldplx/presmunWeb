import React, { useEffect } from 'react';

const JoinUs = () => {
  useEffect(() => {
    // Redirect to the external URL
    window.location.href = 'https://bit.ly/PRESMUN2025EarlyBird';
  }, []);

  return null; // Render nothing, since we're redirecting
};

export default JoinUs;