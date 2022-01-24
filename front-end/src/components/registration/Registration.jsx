import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    alert('registered does nothing tho in background');
    e.preventDefault();
  };
  return (
    <div>
      <h1>EventEdge</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Username"
          type="text"
          value={credentials.username}
          onChange={handleChange}
          name="username"
        />

        <input
          className="input"
          placeholder="Email"
          type="text"
          value={credentials.email}
          onChange={handleChange}
          name="email"
        />

        <input
          className="input"
          placeholder="Password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          name="password"
        />

        <input type="submit" value="Register" />
      </form>
      <p>Have an account? </p>
      <Link to="/login">Login</Link>
    </div>
  );
}
