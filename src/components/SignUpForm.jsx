import React, { useState } from 'react';
import { saveUserSession } from '../utils/localStorageOps';

const SignUpForm = ({ onLogin }) => {
  const [error, setError] = useState('');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    quotes: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUp = () => {
    if (!signUpData.email || !signUpData.password) {
      setError('Email and password are must to enter.');
    } else if (!emailPattern.test(signUpData.email)) {
      setError('Invalid Email');
    } else if (signUpData.password.length < 7) {
      setError('Password should be atleast 7 characters');
    } else {
      saveUserSession(signUpData.email, signUpData);
      onLogin();
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form action="submit">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={signUpData.name}
            onChange={handleInputChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={handleInputChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={handleSignUp}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
