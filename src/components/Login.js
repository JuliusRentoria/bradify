import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="username" id="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
        <br/>
        <a href='/'>Forgot password?</a>
        <p className="signup">Don't have an account? <a href="/">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;
