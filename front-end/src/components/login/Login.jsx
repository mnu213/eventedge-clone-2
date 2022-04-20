import axios from 'axios';
import { React, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.css';
import { AuthContext } from '../../context/auth';

export default function Login() {
  const context = useContext(AuthContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  useEffect(() => {
    console.log(context);
  }, []);
  console.log("testin login frontend outside of return inside function")
  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loginReq = async (e, email, password) => {
    e.preventDefault();
    let res = false;
    try {
      res = await axios.post('http://localhost:8000/auth/login', {
        email: email,
        password: password,
      });
      const { token } = res.data;
      console.log(token);

      context.login(token);
      // navigate('/chats');
    } catch (err) {
      console.log(err.message);
      alert('Auth Failed');
    }
  };
  return (
    <div>
      <h1>EventEdge</h1>

      <form onSubmit={(e) => loginReq(e, credentials.email, credentials.password)}>
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
        <button type="submit"> Login</button>
      </form>
      <p>Not Signed up yet?</p>
      <Link to="/registration">Register</Link>
    </div>
  );
}
