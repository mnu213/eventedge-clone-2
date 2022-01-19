import { React, useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({username:'',password:''});

  const handleChange = (e) => {
    setCredentials( (prev)=>{
        return(
        {
          [e.target.name]: e.target.value
        }
        )
    });
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
          <input type="text" value={credentials.username} onChange={handleChange} name='username'/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Password
          <input type="text" value={credentials.password} onChange={handleChange} name='password' />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
