import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { saveUserSession } from '../utils/localStorageOps';
import { UserContext } from '../contexts/UserContext';
import NavBar from '../components/Navbar';
import QuoteCard from '../components/QuoteCard';
import UserQuotesWrapper from '../components/UserQuotesWrapper';
import '../App.css';

const Home = () => {
  const { id: userName } = useParams();
  const navigate = useNavigate();
  const [userQuotes] = useContext(UserContext);

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (userName) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [userName]);

  const handleSignOut = () => {
    setIsSignedIn(false);
    saveUserSession(userQuotes.email, userQuotes);
    navigate(`/`);
  };

  return (
    <>
      <NavBar
        onSignIn={() => setIsSignedIn(true)}
        onSignOut={handleSignOut}
        isSignedIn={isSignedIn}
        userName={userName}
      />
      <div className="mainContainer">
        <QuoteCard />
        {}
        {isSignedIn && <UserQuotesWrapper />}
      </div>
    </>
  );
};

export default Home;
