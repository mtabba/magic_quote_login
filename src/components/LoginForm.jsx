import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getUserSession } from '../utils/localStorageOps';

const LoginForm = ({ onSignUp, onLoggedIn }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [userData, setUserData] = useState({});
  const [error, setError] = useState('');
  const [userQuotes, setUserQuotes] = useContext(UserContext);

  useEffect(() => {
    // debugger;
    if (loginData.password) {
      setUserData(getUserSession(loginData.email));
    }
  }, [loginData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    if (userData) {
      if (
        loginData.email === userData.email &&
        loginData.password === userData.password
      ) {
        onLoggedIn(userData.name);
        setUserQuotes(getUserSession(loginData.email));
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } else {
      setError('No data Found. Please SignUp');
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form action="submit">
        <div className="form-group">
          <label htmlFor="">Email: </label>
          <input
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="">Password: </label>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <button type="button" formAction="submit" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={onSignUp}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
