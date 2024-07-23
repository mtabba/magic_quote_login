import React, { useState } from 'react';
import { saveUserSession } from '../utils/localStorageOps';

const SignUpForm = ({ onLogin }) => {
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
    saveUserSession(signUpData.email, signUpData);
    // console.log(
    //   'Signed up with:',
    //   signUpData.name,
    //   signUpData.email,
    //   signUpData.password
    // );
    // Navigate back to login form after successful registration
    onLogin();
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
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
