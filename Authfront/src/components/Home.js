import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div>
      <h1>Welcome to the Role-Based Auth System</h1>
      {!isAuthenticated ? (
        <div>
          <Link to="/login">
            <button style={{ marginRight: '10px' }}>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      ) : (
        <p>You are logged in.</p>
      )}
    </div>
  );
}

export default Home;
