import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <Link to="/">Home</Link>

      {!token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {token && role === 'Admin' && <Link to="/admin">Admin Page</Link>}
      {token && role === 'User' && <Link to="/user">User Page</Link>}

      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
