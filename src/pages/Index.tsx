
import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect from the index page to products
const Index = () => {
  return <Navigate to="/products" />;
};

export default Index;
