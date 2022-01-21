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
        <label className="label">
          Username
          <input type="text" value={credentials.username} onChange={handleChange} name="username" />
        </label>

        <label className="label">
          Email
          <input type="text" value={credentials.email} onChange={handleChange} name="email" />
        </label>

        <label className="label">
          Password
          <input
            type="password"
            value={credentials.password}
            onChange={handleChange}
            name="password"
          />
        </label>
        <input type="submit" value="Register" />
      </form>
      <p>Have an account? </p>
      <Link to="/login">Login</Link>
    </div>
  );
}
