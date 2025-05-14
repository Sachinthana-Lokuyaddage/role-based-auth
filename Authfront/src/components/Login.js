import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:7253/api/account/login', {
        username,
        password
      });

      const token = response.data.token;
      const decoded = jwtDecode(token);
      const roles = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      const role = Array.isArray(roles) ? roles[0] : roles;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === 'Admin') {
        navigate('/admin');
      } else if (role === 'User') {
        navigate('/user');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
