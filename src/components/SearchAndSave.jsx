import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
// import { saveUserQuotes, getUserQuotes } from '../utils/localStorageOps';
import '../App.css';

const SearchAndSave = ({
  searchData,
  searchButtonClicked,
  setSearchedItem,
}) => {
  const [inputFieldValue, setInputFieldValue] = useState('');
  const [userQuotes, setUserQuotes] = useContext(UserContext);

  const handleInput = (e) => {
    e.preventDefault();
    setInputFieldValue(e.target.value);
    // e.target.value = '';
  };

  const handleSaveButton = () => {
    if (inputFieldValue && inputFieldValue.trim().length) {
      setUserQuotes({
        ...userQuotes,
        quotes: [...userQuotes.quotes, inputFieldValue],
      });
    }
    setInputFieldValue('');
  };

  const handleSearchButton = () => {
    searchButtonClicked(true);
    setSearchedItem(inputFieldValue);
    setInputFieldValue('');
  };

  return (
    <div className="SearchAndSave">
      <h2>Your Quotes</h2>
      <input
        type="text"
        value={inputFieldValue}
        placeholder="Enter your Quotes"
        onChange={handleInput}
      />
      <button onClick={handleSaveButton}>Save</button>
      <button onClick={handleSearchButton}>Search</button>
    </div>
  );
};

export default SearchAndSave;
