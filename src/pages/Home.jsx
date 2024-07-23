import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import QuoteCard from '../components/QuoteCard';
import UserQuotesWrapper from '../components/UserQuotesWrapper';
import { useParams } from 'react-router-dom';
import { getUserSession, getUserQuotes } from '../utils/localStorageOps';
import '../App.css';

const Home = () => {
  const { id: userName } = useParams();
  const [userData, setUserData] = useState({});

  // ------------------States-------------
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (userName) {
      setIsSignedIn(true);
    }
  }, [userName, userData]);

  const handleSignOut = () => {
    setIsSignedIn(false);
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
