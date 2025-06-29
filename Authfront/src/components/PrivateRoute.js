import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, roleRequired }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
