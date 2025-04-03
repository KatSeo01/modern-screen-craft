
import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect from the index page to dashboard
const Index = () => {
  return <Navigate to="/dashboard" />;
};

export default Index;
