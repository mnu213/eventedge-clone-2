import { React, useState } from 'react';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const handleChange = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleChange2 = (e) => {
    setLoginPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    alert('logged in');
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text" value={loginEmail} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Password
          <input type="text" value={loginPassword} onChange={handleChange2} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
