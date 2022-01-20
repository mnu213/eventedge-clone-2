import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    alert('logged in');
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Email
          <input type="text" value={credentials.email} onChange={handleChange} name="email" />
        </label>

        <label className="label">
          Password
          <input type="text" value={credentials.password} onChange={handleChange} name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
      <p>Not Signed up yet? </p>
      <Link to="/registration">
        <a>Register</a>
      </Link>
    </div>
  );
}
