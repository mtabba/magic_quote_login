import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ onSignIn, onSignOut, isSignedIn, userName }) => {
  return (
    <nav className="navbar">
      <h1>Magic Quotes</h1>
      {isSignedIn ? (
        <div className="loginInfo">
          <span>{userName}</span>
          <button onClick={onSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="loginSignUpButtons">
          <NavLink to="/Login/SignIn">
            <button onClick={onSignIn}>Sign In</button>
          </NavLink>
          <NavLink to="/Login/SignUp">
            <button>Sign Up</button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
