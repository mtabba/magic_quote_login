import { useEffect, useState, useContext } from 'react';
// import {} from '../utils/localStorageOps';
import SearchAndSave from './SearchAndSave';
import ShowUserQuote from './ShowUserQuote';
import { UserContext } from '../contexts/UserContext';
import '../App.css';

const UserQuotesWrapper = () => {
  const [userQuoteDisplay, setUserQuoteDisplay] = useState([]);

  const [userQuotes] = useContext(UserContext);

  const [searchButton, setSearchButton] = useState(false);
  const [searcheditem, setSearchedItem] = useState('');
  const [foundItem, setFoundItem] = useState([]);
  // -----------Save Logic --------------
  useEffect(() => {
    // -------- Get Current User From Local Storage------
    if (userQuotes.quotes) {
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
