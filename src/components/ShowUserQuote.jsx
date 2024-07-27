import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../App.css';

const UserQuotes = ({ quotes, searchButton, setSearchButton }) => {
  const [userQuotes, setUserQuotes] = useContext(UserContext);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);

  useEffect(() => {
    if (deleteItemIndex !== null) {
      const quotesUpdated = userQuotes.quotes.filter(
        (item, index) => index !== deleteItemIndex
      );
      setUserQuotes({ ...userQuotes, quotes: quotesUpdated });
      setDeleteItemIndex(null);
    }
  }, [deleteItemIndex]);

  return (
    <div className="showQuoteContainer">
      <div className="listUserQuote">
        <ul>
          {quotes.map((quote, index) => (
            <li key={index} className="quoteCard">
              <p>{quote}</p>
              <button
                onClick={() => setDeleteItemIndex(index)}
                className="deleteButton"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="showAllButton">
        {searchButton && (
          <button onClick={() => setSearchButton(false)}>Show All</button>
        )}
      </div>
    </div>
  );
};

export default UserQuotes;
