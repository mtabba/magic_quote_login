import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndSave from './SearchAndSave';
import ShowUserQuote from './ShowUserQuote';
import { UserContext } from '../contexts/UserContext';
import '../App.css';

const UserQuotesWrapper = () => {
  const [userQuoteDisplay, setUserQuoteDisplay] = useState([]);
  const navigate = useNavigate();
  const [userQuotes] = useContext(UserContext);
  const [searchButton, setSearchButton] = useState(false);
  const [searcheditem, setSearchedItem] = useState('');
  const [foundItem, setFoundItem] = useState([]);
  // -----------Save Logic --------------
  useEffect(() => {
    // -------- Get Current User From Local Storage------
    if (!userQuotes.quotes) {
      navigate(`/`);
    } else {
      setUserQuoteDisplay([...userQuotes.quotes]);
    }
  }, [userQuotes]);
  //---------- Search Logic------------
  useEffect(() => {
    const found = userQuoteDisplay.filter((item) =>
      item.toLowerCase().includes(searcheditem.toLowerCase())
    );
    setFoundItem(found);
  }, [searcheditem, userQuoteDisplay]);

  return (
    <div className="userQuoteContainer">
      <SearchAndSave
        searchButtonClicked={setSearchButton}
        setSearchedItem={setSearchedItem}
      />
      {searchButton ? (
        <ShowUserQuote
          quotes={foundItem}
          searchButton={searchButton}
          setSearchButton={setSearchButton}
        />
      ) : (
        <ShowUserQuote quotes={userQuoteDisplay} />
      )}
    </div>
  );
};

export default UserQuotesWrapper;
