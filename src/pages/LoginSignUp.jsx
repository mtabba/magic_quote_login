import { useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { useNavigate, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import '../App.css';

const LoginSignUp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    id == 'SignIn' ? setIsSignIn(true) : setIsSignIn(false);
  }, [id]);

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  const handleLogin = (userName) => {
    navigate(`/Home/${userName}`);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Magic Quotes</h1>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </nav>

      <div className="loginSignUpContainer">
        {isSignIn ? (
          <LoginForm onSignUp={handleSignUpClick} onLoggedIn={handleLogin} />
        ) : (
          <SignUpForm onLogin={() => setIsSignIn(true)} />
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
