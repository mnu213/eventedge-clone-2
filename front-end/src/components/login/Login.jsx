import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.css';



export default function Login() {
  const pretendDatabase = {
    email:  'mnu213@nyu.edu',
    password: '123'
  }
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ 'email': '', 'password': '' });

  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    if (credentials.email === pretendDatabase.email && credentials.password === pretendDatabase.password){
      localStorage.setItem("email",credentials.email)
      navigate("/chats")
    }
    else {
      alert("wrong credentials")
    }
    
    e.preventDefault();
  };
  return (
    <div>
      <h1>EventEdge</h1>
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
        Register
      </Link>
    </div>
  );
}
