import { useEffect, useState, useContext } from 'react';
import {
  saveUserQuotes,
  getUserQuotes,
  getUserSession,
} from '../utils/localStorageOps';
import SearchAndSave from './SearchAndSave';
import ShowUserQuote from './ShowUserQuote';
import { UserContext } from '../contexts/UserContext';
import '../App.css';

const UserQuotesWrapper = () => {
  const [userSaveData, setUserSaveData] = useState();
  const [userQuoteDisplay, setUserQuoteDisplay] = useState([]);

  const [userQuotes, setUserQuotes] = useContext(UserContext);

  const [searchButton, setSearchButton] = useState(false);
  const [searcheditem, setSearchedItem] = useState('');
  const [foundItem, setFoundItem] = useState([]);
  // -----------Save Logic --------------
  useEffect(() => {
    // -------- Get Current User From Local Storage------
    console.log('ye user hai Wrapper: ', userQuotes);
    setUserQuoteDisplay([...userQuotes]);
  }, [userQuotes]);
  //---------- Search Logic------------
  useEffect(() => {
    let found = userQuoteDisplay.filter((item) =>
      item.toLowerCase().includes(searcheditem.toLowerCase())
    );
    setFoundItem(found);
  }, [searcheditem]);

  return (
    <div className="userQuoteContainer">
      <SearchAndSave
        saveData={setUserSaveData}
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
